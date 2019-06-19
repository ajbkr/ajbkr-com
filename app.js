const bodyParser = require('body-parser')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const crypto = require('crypto')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('hbs')
const helmet = require('helmet')
const logger = require('morgan')
const minifyHTML = require('express-minify-html')
const path = require('path')

const { EXPIRES } = require('./config')
const checkThings = require('./helpers/check-things')
const about = require('./routes/about')
const index = require('./routes/index')

const things = require('./routes/things.json')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
hbs.registerPartials(path.join(__dirname, 'views', 'partials'))

app.use(favicon(path.join(__dirname, 'public', 'favicons', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(compression())
app.use(cookieParser())
app.get('env') === 'production' && app.use(minifyHTML({ override: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(helmet())

app.locals.gravatarImageUrl = 'http://gravatar.com/avatar/' +
 crypto.createHash('md5').update(process.env.EMAIL || '').digest('hex') + '?d=mp&s=80'

app.use('/', index)

checkThings(things, EXPIRES)
  .then(() => {
    app.use('/about', about)

    // catch 404 and forward to error handler
    app.use((req, res, next) => {
      const err = new Error('Not found')
      err.status = 404
      next(err)
    })

    // error handler
    app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message
      res.locals.error = req.app.get('env') === 'development' ? err : {}

      res.locals.quotation = {
        attribution: 'Mark Twain',
        text: "Of all the things I've lost, I miss my mind the most."
      }

      // render the error page
      res.status(err.status || 500)
      res.render('error')
    })
  })
  .catch(err => {
    console.error(err)
  })

module.exports = app
