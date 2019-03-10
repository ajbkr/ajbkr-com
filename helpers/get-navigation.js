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

  for (let i = 0; i < navigation.length; ++i) {
    if (navigation[i].href === url) {
      navigation[i].active = true
      break
    }
  }
  return navigation
}

module.exports = getNavigation
