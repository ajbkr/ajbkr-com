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
    text: 'Projects'
  }, {
    href: '/about',
    text: 'About'
  }]

  const activeNavigation = navigation.filter(o => o.href === url)[0]

  return activeNavigation ? [
    ...navigation.filter(o => o.href !== url),
    {
      ...activeNavigation,
      active: true
    }
  ] : navigation
}

module.exports = getNavigation
