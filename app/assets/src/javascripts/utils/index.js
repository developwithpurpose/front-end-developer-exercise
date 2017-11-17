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


export const toggleClass = (node, className, force = false) => {
  node.classList.toggle(className, force)
}
