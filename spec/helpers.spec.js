/* global describe, expect, it */
'use strict'

const getNavigation = require('../helpers/get-navigation')

describe('helpers', function () {
  describe('getNavigation()', function () {
    const defaultNavigation = [{
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

    it('should return the default navigation for a URL of undefined',
      function () {
        expect(getNavigation()).toEqual(defaultNavigation)
      }
    )

    it('should return the default navigation for an unmatched URL',
      function () {
        expect(getNavigation()).toEqual(defaultNavigation)
      }
    )

    it('should return the default navigation for a URL of "/"', function () {
      expect(getNavigation('/')).toEqual(defaultNavigation)
    })

    it(`should return the navigation with the "about" object's "active" property
    set to true for a URL of "/about"`, function () {
      const aboutNavigation = [
        ...defaultNavigation.filter(o => o.href !== '/about'),
        {
          active: true,
          href: '/about',
          text: 'About'
        }
      ]

      expect(getNavigation('/about')).toEqual(aboutNavigation)
    })

    it(`should return the navigation with only 1 object having an "active"
    property set to true for a URL of "/projects"`, function () {
      expect(getNavigation('/projects').filter(o => o.active).length).toBe(1)
    })
  })
})
