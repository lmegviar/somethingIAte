angular.module('somethingIAte.factories', [])

.factory('Log', function ($http, $location) {
  var putLog = function (logData) {
    return $http({
      method: 'PUT',
      url: '/api/log',
      data: logData
    })
    .then(function() {
      $location.path('/stats');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  return {
    putLog: putLog
  };
})

.factory('Customize', function ($http, $location) {
  var customizeLog = function (custom) {
    return $http({
      method: 'PUT',
      url: '/api/customize',
      data: custom
    })
    .then(function() {
      $location.path('/');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  return {
    customizeLog: customizeLog,
  };
})

.factory('Stats', function ($http) {
  var getStats = function () {
    return $http({
      method: 'GET',
      url: '/api/stats'
    })
    .then(function (resp) {
      return resp.data;
    })
    .catch(console.log);
  };

  return {
    getStats: getStats
  };
})


