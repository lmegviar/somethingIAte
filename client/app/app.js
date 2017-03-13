angular.module('somethingIAte', [
  'somethingIAte.factories',
  'somethingIAte.log',
  'somethingIAte.stats',
  'somethingIAte.users',
  'uiRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/log', {
      templateUrl: 'app/log/log.html',
      controller: 'LogController'
    })
    .when('/stats', {
      templateUrl: 'app/stats/stats.html',
      controller: 'StatsController'
    })
    .otherwise({
      redirectTo: '/log'
    })
})
