const navigation = require('./navigation.json')

function getNavigation (url) {
  const activeNavigation = navigation.filter(o => o.href === url)[0]

  return activeNavigation ? [
    ...navigation.filter(o => o.href !== url),
    {
      ...activeNavigation,
      active: true
    }
  ].sort((o, p) => o.rank - p.rank) : navigation
}

module.exports = getNavigation
