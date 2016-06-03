// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'OpeningController'
  })

  .state('splash', {
    url: '/splash',
    templateUrl: 'templates/splash.html',
    controller: 'OpeningController'
  })

  .state('greetings', {
    url:'/greetings',
    templateUrl: 'templates/greetings.html',
    controller: 'OpeningController'
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.milestones', {
    url: '/milestones',
    views: {
      'menuContent': {
        templateUrl: 'templates/milestones.html'
      }
    }
  })

  .state('app.status', {
    url: '/status',
    views: {
      'menuContent': {
        templateUrl: 'templates/status.html'
      }
    }
  })

  .state('app.unwind', {
    url: '/unwind',
    views: {
      'menuContent': {
        templateUrl: 'templates/unwind.html'
      }
    }
  })

  .state('app.banter', {
    url: '/banter',
    views: {
      'menuContent': {
        templateUrl: 'templates/banter.html'
      }
    }
  })

  .state('app.thoughts', {
    url: '/thoughts',
    views: {
      'menuContent': {
        templateUrl: 'templates/thoughts.html'
      }
    }
  })

  .state('app.preferences', {
      url: '/preferences',
      views: {
        'menuContent': {
          templateUrl: 'templates/preferences.html'
        }
      }
    })

    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.logout', {
      url: '/logout',
      views: {
        'menuContent': {
          templateUrl: 'templates/logout.html',
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/splash');
});
