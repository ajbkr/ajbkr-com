const checkLinks = require('check-links')

module.exports = (function () {
  let cachedCheckedThings
  let timestamp

  function checkThings (things, expires = 60 * 1000) {
    if (!cachedCheckedThings || (+new Date()) - timestamp > expires) {
      return checkLinks(
        things.map(thing => thing.url).filter(url => typeof url !== 'undefined')
      )
        .then(results => {
          const checkedThings = things.map(
            thing => results[thing.url] && results[thing.url].status !== 'alive'
              ? { category: thing.category, name: thing.name }
              : thing
          )
          cachedCheckedThings = checkedThings
          timestamp = +new Date()
          return checkedThings
        })
    }
    return new Promise(resolve => {
      resolve(cachedCheckedThings)
    })
  }

  return checkThings
})()
