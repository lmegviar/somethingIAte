angular.module('somethingIAte', [
  'somethingIAte.factories',
  'somethingIAte.log',
  'somethingIAte.stats',
  'somethingIAte.users',
  'uiRoute'
])

.config(function ($routeProvider, $httpProvider) {
  $urlRouteProvider.otherwise('/log');
  $stateProvider
    .state('log', {
      templateUrl: 'app/log/log.html',
      url: '/log',
      controller: 'LogController'
    })
    .state('stats', {
      templateUrl: 'app/stats/stats.html',
      url: '/stats',
      controller: 'StatsController'
    })
})
