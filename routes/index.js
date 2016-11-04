var express = require('express');
var router = express.Router();

function getNavigation(url) {
  var navigation = [{
    href: '/',
    text: 'Home'
  }, {
    href: '/brain-dumps',
    text: 'Brain dumps'
  }, {
    href: '/cheat-sheets',
    text: 'Cheat sheets'
  }, {
    href: '/about',
    text: 'About'
  }];

  for (var i = 0; i < navigation.length; ++i) {
    if (navigation[i].href === url) {
      navigation[i].active = true;
      break;
    }
  }
  return navigation;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    navigation: getNavigation(req.url),
    quotation: {
      attribution: 'J. R. R. Tolkien, The Fellowship of the Ring',
      text: 'Do not meddle in the affairs of wizards, for they are subtle ' +
       'and quick to anger.',
    },
    title: "Andrew J. Baker's personal Web site"
  });
});

router.get('/brain-dumps', function(req, res, next) {
  res.render('brain-dumps', {
    navigation: getNavigation(req.url),
    quotation: {
      attribution: 'Time, Alice Through the Looking Glass',
      text: 'Everyone parts with everything eventually, my dear.'
    },
    title: 'Brain dumps'
  });
});

router.get('/cheat-sheets', function(req, res, next) {
  res.render('cheat-sheets', {
    navigation: getNavigation(req.url),
    quotation: {
      attribution: 'Terminator 2: Judgment Day',
      text: 'Skynet begins to learn at a geometric rate. It becomes ' +
       'self-aware at 2:14am Eastern time, August 29th.'
    },
    title: 'Cheat sheets'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    navigation: getNavigation(req.url),
    quotation: {
      attribution: 'Aleister Crowley',
      text: 'As a God goes, I go.'
    },
    title: 'About'
  });
});

module.exports = router;
