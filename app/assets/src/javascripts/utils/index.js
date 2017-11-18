import * as _ from 'redash'

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
export const parseQueryString = _.pipe([
  _.replace(/^\?/, ''),
  _.split('&'),
  _.map(_.split('=')),
  _.fromPairs,
])


const addClass = (node, className) =>
  node.setAttribute('class', `${node.getAttribute('class')} ${className}`)

const removeClass = (node, className) =>
  node.setAttribute('class', node.getAttribute('class').replace(className, ''))

// Poor man's `classList` ponyfill (https://github.com/sindresorhus/ponyfill)
export const toggleClass = (node, className, force) => {
  if (node.classList) {
    node.classList.toggle(className, force)
    return
  }
  const hasClass = node.getAttribute('class').indexOf(className) !== -1

  // force argument was supplied
  if (typeof force === 'boolean') {
    if (force  && !hasClass) {
      addClass(node, className)
    } else if (!force && hasClass) {
      removeClass(node, className)
    }
    return
  }

  hasClass ? removeClass(node, className) : addClass(node, className)
}

export const request = {
  get (endpoint, cb) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        cb(null, JSON.parse(xhr.responseText))
      }
    }
    xhr.open('GET', endpoint, true)
    xhr.send(null)
  }
}
