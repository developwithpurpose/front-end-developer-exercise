import * as _ from 'redash'
import '../stylesheets/main.scss'

/**
 * Lightweight query string parsing utility, transforms parameters in a
 * query string into a more manageable object representation. Would use an
 * existing, community-blessed npm package in a real production app.
 *
 * @example
 * parseQueryString('?foo=bar&baz=biz') // => { foo: 'bar', baz: 'biz' }
 *
 * @param {string} queryString - the query string to parse
 * @returns {object} the parsed query string object
 */
const parseQueryString = _.pipe([
  _.replace(/^\?/, ''),
  _.split('&'),
  _.map(_.split('=')),
  _.fromPairs,
])

const Navigation = (() => {
  const _nav = document.querySelector('.baby-step-nav')
  const _navItems = [..._nav.querySelectorAll('li')]
  const _steps = [...document.querySelectorAll('.baby-step')]

  /**
   * Transforms a string into a conventional, snake-cased element id.
   *
   * @example
   * makeId('Baby Step 5') // => baby-step-5
   *
   * @param {string} str - the string to transform into an id
   * @returns {string} the transformed string
   */
  const makeId = _.pipe([
    _.toLower,
    _.replace(/\s/g, '-'),
  ])

  /**
   * Handles transitioning the view to display the desired step.
   *
   * @param {string} title - the title of the step that should be shown
   * @noreturn
   */
  const selectStep = (title) => {
    const titleId = makeId(title)

    // Show the correct step content in the primary viewport
    _.forEach(stepNode => {
      stepNode.classList.toggle('active', stepNode.id === titleId)
    }, _steps)

    // Update the active navigation item
    _.forEach(navItem => {
      const { href } = navItem.querySelector('a')
      const { step } = parseQueryString(decodeURI(href.split('?')[1]))
      navItem.classList.toggle('active', step === title)
    }, _navItems)
  }

  /**
   * Initializes the navigation feature, which allows the user to select
   * different baby steps.
   *
   * @noreturn
   */
  const init = () => {
    _nav.addEventListener('click', (e) => {
      const { target } = e
      if (!target.href) return

      e.preventDefault()
      const queryString = decodeURI(target.href.split('?')[1]) // eh...
      const { step: title } = parseQueryString(queryString)

      // Replace the current history entry with the currently selected step
      // to preserve state over reloads, and transition to the target step.
      if (history.replaceState) {
        history.replaceState('', '', `?step=${encodeURI(title)}`)
      }
      selectStep(title)
    })
  }

  return { init }
})()

Navigation.init()
