function getNavigation (url) {
  const navigation = [{
    /*    href: '/personal-development',
    text: 'Personal Development'
  }, { */
    hidden: true,
    href: '/linkedout',
    text: 'LinkedOut'
  }, {
    href: '/projects',
    rank: 1,
    text: 'Projects'
  }, {
    href: '/about',
    rank: 2,
    text: 'About'
  }]

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
