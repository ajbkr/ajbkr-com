const express = require('express')
const router = express.Router()

const { EXPIRES } = require('../config')
const checkThings = require('../helpers/check-things')
const getNavigation = require('../helpers/get-navigation')

const things = require('./things.json')

router.get('/', function (req, res, next) {
  checkThings(things, EXPIRES)
    .then(checkedThings => {
      res.render('about', {
        navigation: getNavigation(req.url),
        production: res.app.get('env') === 'production',
        quotation: {
          attribution: 'Aleister Crowley',
          text: 'As a God goes, I go.'
        },
        things: {
          decades: checkedThings.filter(
            thing => thing.category !== 'home' && thing.category !== 'work'
          ),
          home: checkedThings.filter(thing => thing.category === 'home'),
          work: checkedThings.filter(thing => thing.category === 'work')
        },
        title: 'About'
      })
    })
    .catch(err => {
      console.error(err)
      res.send('Something bad happened')
    })
})

module.exports = router
