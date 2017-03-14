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
      console.log('reroute to stats');
    })
    .catch(function (error) {
      console.error(error);
    });
  };

  return {
    putLog: putLog
  };
})

.factory('Stats', function ($http) {
  var getStats = function () {
    return $http({
      method: 'GET',
      url: '/api/stats'
    })
    .then(function (resp) {
      return resp.data.foods;
      console.log('Get stats resp.data: ', resp.data.foods);
    })
    .catch(console.log);
  };

  return {
    getStats: getStats
  };
})


