const express = require('express')
const router = express.Router()

const getNavigation = require('../helpers/get-navigation')

const quotations = require('./quotations.json')

/* GET home page. */
router.get('/', function (req, res, next) {
  const quotation = quotations[req.url]

  res.render('index', {
    gravatarImageUrl: req.app.locals.gravatarImageUrl,
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation
  })
})

router.get('/finished', function (req, res, next) {
  const quotation = quotations[req.url]

  res.render('finished', {
    gravatarImageUrl: req.app.locals.gravatarImageUrl,
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation,
    title: 'Finished'
  })
})

router.get('/linkedout', function (req, res, next) {
  const quotation = quotations[req.url]

  res.render('linkedout', {
    gravatarImageUrl: req.app.locals.gravatarImageUrl,
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation,
    title: 'LinkedOut'
  })
})

router.get('/personal-development', function (req, res, next) {
  const quotation = quotations[req.url]

  res.render('personal-development', {
    gravatarImageUrl: req.app.locals.gravatarImageUrl,
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation,
    title: 'Personal Development'
  })
})

router.get('/projects', function (req, res, next) {
  const quotation = quotations[req.url]

  res.render('projects/index', {
    gravatarImageUrl: req.app.locals.gravatarImageUrl,
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation,
    title: 'Projects'
  })
})

router.get('/projects/electronics', function (req, res, next) {
  const quotation = quotations[req.url]

  res.render('projects/electronics', {
    gravatarImageUrl: req.app.locals.gravatarImageUrl,
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation,
    title: 'Electronics - Projects'
  })
})

router.get('/transformation', function (req, res, next) {
  const quotation = quotations[req.url]

  res.render('transformation', {
    gravatarImageUrl: req.app.locals.gravatarImageUrl,
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation,
    title: 'Transformation'
  })
})

module.exports = router
