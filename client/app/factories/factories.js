angular.module('somethingIAte.services', [])

.factory('Log', function ($http) {
  var putLog = function () {
    return $http({
      method: 'PUT',
      url: '/api/log'
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

.factory('Users', function ($http, $location, $window) {

  var login = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/login',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isLoggedIn = function () {
    return !!$window.localStorage.getItem('eatThisToken');
  };

  var signout = function () {
    $window.localStorage.removeItem('eatThisToken');
    $location.path('/login');
  };

  var attachTokens = function () {
    var attach = {
      request: function (object) {
        var jwt = $window.localStorage.getItem('eatThisToken');
        if (jwt) {
          object.headers['x-access-token'] = jwt;
        }
        object.headers['Allow-Control-Allow-Origin'] = '*';
        return object;
      }
    };
    return attach;
  }

  return {
    login: login,
    signup: signup,
    isLoggedIn: isLoggedIn,
    signout: signout,
    attachTokens: attachTokens
  };

});
