angular.module('somethingIAte', ['ngRoute',
  'somethingIAte.factories',
  'somethingIAte.log',
  'somethingIAte.stats'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/log', {
      templateUrl: '/log/log.html',
      controller: 'LogController'
    })
    .when('/stats', {
      templateUrl: '/stats/stats.html',
      controller: 'StatsController'
    })
    .otherwise({
      redirectTo: '/log'
    })
})

.run(function () {
//necessary?
})