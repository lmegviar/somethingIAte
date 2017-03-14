angular.module('somethingIAte', ['ui.router',
  'somethingIAte.factories',
  'somethingIAte.log',
  'somethingIAte.customize',
  'somethingIAte.stats'
])

.config(function ($stateProvider, $locationProvider) {
  $stateProvider
    .state('log', {
      url: '/',
      templateUrl: './log/log.html',
    })
    .state('stats', {
      url: '/stats',
      templateUrl: './stats/stats.html',
    })
    .state('customize', {
      url: '/customize',
      templateUrl: './customize/customize.html',
    })

    $locationProvider.html5Mode(true);
})

