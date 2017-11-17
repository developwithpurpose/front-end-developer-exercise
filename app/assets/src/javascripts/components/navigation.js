import * as _ from 'redash'
import { request, parseQueryString, toggleClass } from '../utils'

const _navItems = [...document.querySelectorAll('.baby-step-nav li')]
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
  let activeStepNode
  const titleId = makeId(title)

  // Show the correct step content in the primary viewport
  _.forEach(stepNode => {
    if (stepNode.id !== titleId) {
      toggleClass(stepNode, 'active', false)
      return
    }

    activeStepNode = stepNode
    toggleClass(stepNode, 'active', true)
  }, _steps)

  // Update the active navigation item
  _.forEach(navItem => {
    const { href } = navItem.querySelector('a')
    const { step } = parseQueryString(decodeURI(href.split('?')[1]))
    toggleClass(navItem, 'active', step === title)
  }, _navItems)

  // Update the list of friends for the active step
  request.get('/api/baby-steps', (err, res) => {
    if (err) {
      // would actually handle this in a real app...
      return
    }

    const out = activeStepNode.querySelector('.baby-step__friends')
    const activeStepIdx = _steps.indexOf(activeStepNode)
    const friendsOnStep = _.filter(_.matches({ babyStep: activeStepIdx + 1 }), res.friends)
    const remainingFriends = friendsOnStep.slice(2)

    // No output if there are no friends on the current step
    if (!friendsOnStep.length) {
      out.innerHTML = ''
      return
    }

    let content = ''
    content += friendsOnStep.slice(0, 2)
      .map(f => `<a href="#" class="baby-step-friend">${f.firstName} ${f.lastName}</a>`)
      .join(friendsOnStep.length === 2 ? ' and ' : ', ')

    if (remainingFriends.length) {
      content += ` and ${remainingFriends.length} other `
      content += remainingFriends.length === 1 ? `friend` : `friends`
    }

    content += friendsOnStep.length === 1
      ? ` is also in ${title}`
      : ` are also in ${title}`

    out.innerHTML = content
  })
}

const handleNavClick = function handleNavClick (e) {
  e.preventDefault()
  const queryString = decodeURI(this.href.split('?')[1]) // eh...
  const { step: title } = parseQueryString(queryString)

  // Replace the current history entry with the currently selected step
  // to preserve state over reloads, and transition to the target step.
  if (history.replaceState) {
    history.replaceState('', '', `?step=${encodeURI(title)}`)
  }
  selectStep(title)
}

/**
 * Initializes the navigation feature, which allows the user to select
 * different baby steps.
 *
 * @noreturn
 */
export const init = () => {
  // Would normally use event delegation here, but not worrying about it for
  // timing purposes.
  _.forEach(navItem => {
    navItem.querySelector('a').addEventListener('click', handleNavClick)
  }, _navItems)
}
