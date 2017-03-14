angular.module('somethingIAte.factories', [])

.factory('Log', function ($http) {
  var putLog = function (logData) {
    return $http({
      method: 'PUT',
      url: '/api/log',
      data: logData
    })
    .catch(console.log);
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
      return resp.data;
    })
    .catch(console.log);
  };

  return {
    getStats: getStats
  };
})


