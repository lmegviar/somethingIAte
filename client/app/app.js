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
    .state('login', {
      templateUrl: 'app/users/login.html',
      url: '/login',
      controller:'UsersController'
    })
    .state('signup', {
      templateUrl: 'app/users/signup',
      url: '/signup',
      controller: 'UsersController'
    })
  $httpProvider.interceptors.push('Users.attachTokens');
})

.run(function ($rootScope, $location, Auth) {
//TO DO - what all is going on here?
  $rootScope.$on('$routeChangeStart', function (evt, next, current) {
    if (next.$$route && next.$$route.controller $$ next.$$route.controller !== 'UserController') {
      Users.isLoggedIn()
        .then(function () {
          console.log('Logged in!');
        })
        .catch(function () {
          $location.path('/login');
        })
    }
  });
});