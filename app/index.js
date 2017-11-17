const path = require('path')
const express = require('express')
const app = express()

app.use(require('morgan')('dev'))
app.use(require('compression')())

if (app.get('env') === 'development') {
  app.use(require('./middleware/live-reload')())
}

// Resource Layer
// ------------------------------------
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use('/assets/images', express.static(path.resolve(__dirname, 'assets/images')))
app.use('/assets', express.static(path.resolve(__dirname, 'assets/dist')))
app.get('/', (req, res) => {
  let hasActiveStep = false
  const { step: activeStepTitle } = req.query

  const babySteps = require('./baby-step-sections.json').map(step => {
    if (step.title !== activeStepTitle) return step

    hasActiveStep = true
    return Object.assign({}, step, { active: true })
  })

  // If there are no active steps, make the first step active by default.
  if (!hasActiveStep) {
    babySteps[0].active = true
  }

  res.render('index', {
    title: `The ${babySteps.length} Baby Steps`,
    babySteps,
  })
})

// API Layer
// ------------------------------------
const api = express.Router()

api.get('/baby-steps', (req, res) => {
  res.json(require('./baby-steps.json'))
})

app.use('/api', api)

module.exports = app
