var express = require('express');
var router = express.Router();

function getNavigation(url) {
  var navigation = [{
/*    href: '/personal-development',
    text: 'Personal Development'
  }, {*/
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
    production: res.app.get('env') === 'production',
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
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Chuck Palahniuk, Fight Club',
      text: 'I say never be complete, I say stop being perfect, I say ' +
       "let... let's evolve, let the chips fall where they may."
    },
    title: 'Personal Development'
  });
});

router.get('/projects', function(req, res, next) {
  res.render('projects/index', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Time, Alice Through the Looking Glass',
      text: 'Everyone parts with everything eventually, my dear.'
    },
    title: 'Projects'
  });
});

router.get('/projects/electronics', function(req, res, next) {
  res.render('projects/electronics', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Nietzsche',
      text: 'He who fights with monsters should be careful lest he thereby ' +
       'become a monster'
    },
    title: 'Electronics - Projects'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    navigation: getNavigation(req.url),
    production: res.app.get('env') === 'production',
    quotation: {
      attribution: 'Aleister Crowley',
      text: 'As a God goes, I go.'
    },
    title: 'About'
  });
});

module.exports = router;
