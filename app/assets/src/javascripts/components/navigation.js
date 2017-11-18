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
 * Converts a list of friends into markup.
 *
 * @param {string} stepTitle - the title of the current step
 * @param {Array<Friend>} friends - the list of friends to transform
 * @return {string} the raw html string
 */
const createFriendListMarkup = (stepTitle, friends) => {
  const [firstFriend, secondFriend, ...restFriends] = friends
  const friendLink = ({ firstName, lastName }) =>
    `<a href="#" class="baby-step__friend">${firstName} ${lastName}</a>`

  switch (friends.length) {
    case 0:
      return ''
    case 1:
      return `${friendLink(firstFriend)} is also in ${stepTitle}`
    case 2:
      return `${friendLink(firstFriend)} and ${friendLink(secondFriend)} are also in ${stepTitle}`
    default:
      const friendsStr = restFriends.length === 1 ? 'friend' : 'friends'
      return `${friendLink(firstFriend)}, ${friendLink(secondFriend)}, and ${restFriends.length} other ${friendsStr} are also in ${stepTitle}`
  }
}

const updateStepFriends = (stepNode) => {
  request.get('/api/baby-steps', (err, res) => {
    if (err) {
      // would actually handle this in a real app...
      return
    }

    const title = stepNode.querySelector('.baby-step__title').textContent
    const activeStepIdx = _steps.indexOf(stepNode)
    const friendsOnStep = _.filter(_.matches({ babyStep: activeStepIdx + 1 }), res.friends)
    stepNode.querySelector('.baby-step__friends').innerHTML = createFriendListMarkup(title, friendsOnStep)
  })
}

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

  // Ensure friends list gets updated as well
  updateStepFriends(activeStepNode)
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
  // Would normally use event delegation here, but not worrying about it for timing purposes.
  _.forEach(navItem => {
    navItem.querySelector('a').addEventListener('click', handleNavClick)
  }, _navItems)

  // Fetch friends for the initially selected step
  const activeStepNode = _.find(step => /active/.test(step.className), _steps)
  updateStepFriends(activeStepNode)
}
