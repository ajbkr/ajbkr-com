var express = require('express');
var router = express.Router();

function getNavigation(url) {
  var navigation = [{
    href: '/personal-development',
    text: 'Personal Development'
  }, {
    href: '/projects',
    text: 'Projects'
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
    }
  });
});

router.get('/personal-development', function(req, res, next) {
  res.render('personal-development', {
    navigation: getNavigation(req.url),
    quotation: {
      attribution: 'Chuck Palahniuk, Fight Club',
      text: 'I say never be complete, I say stop being perfect, I say ' +
       "let... let's evolve, let the chips fall where they may."
    },
    title: 'Personal Development'
  });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', {
    navigation: getNavigation(req.url),
    quotation: {
      attribution: 'Time, Alice Through the Looking Glass',
      text: 'Everyone parts with everything eventually, my dear.'
    },
    title: 'Projects'
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
