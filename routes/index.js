const express = require('express')
const router = express.Router()

const { EXPIRES } = require('../config')
const checkThings = require('../helpers/check-things')
const getNavigation = require('../helpers/get-navigation')

const things = require('./things.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'J. R. R. Tolkien, The Fellowship of the Ring',
      text: 'Do not meddle in the affairs of wizards, for they are subtle ' +
       'and quick to anger.'
    }
  })
})

router.get('/finished', function (req, res, next) {
  res.render('finished', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Mark Twain',
      text: 'Giving up smoking is the easiest thing in the world. I know ' +
       "because I've done it thousands of times."
    },
    title: 'Finished'
  })
})

router.get('/linkedout', function (req, res, next) {
  res.render('linkedout', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Buckminster Fuller',
      text: 'We keep inventing jobs because of this false idea that ' +
       'everybody has to be employed at some kind of drudgery because, ' +
       'according to Malthusian-Darwinian theory he must justify his right ' +
       'to exist.'
    },
    title: 'LinkedOut'
  })
})

router.get('/personal-development', function (req, res, next) {
  res.render('personal-development', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Chuck Palahniuk, Fight Club',
      text: 'I say never be complete, I say stop being perfect, I say ' +
       "let... let's evolve, let the chips fall where they may."
    },
    title: 'Personal Development'
  })
})

router.get('/projects', function (req, res, next) {
  res.render('projects/index', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Time, Alice Through the Looking Glass',
      text: 'Everyone parts with everything eventually, my dear.'
    },
    title: 'Projects'
  })
})

router.get('/projects/electronics', function (req, res, next) {
  res.render('projects/electronics', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Nietzsche',
      text: 'He who fights with monsters should be careful lest he thereby ' +
       'become a monster'
    },
    title: 'Electronics - Projects'
  })
})

router.get('/about', function (req, res, next) {
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
