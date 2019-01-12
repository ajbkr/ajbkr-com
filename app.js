var bodyParser   = require('body-parser');
var compression  = require('compression');
var cookieParser = require('cookie-parser');
var express      = require('express');
var favicon      = require('serve-favicon');
var hbs          = require('hbs');
var helmet       = require('helmet');
var logger       = require('morgan');
var path         = require('path');

var index = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

app.use(favicon(path.join(__dirname, 'public', 'favicons', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.locals.quotation = {
    attribution: 'Mark Twain',
    text: "Of all the things I've lost, I miss my mind the most."
  };

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
