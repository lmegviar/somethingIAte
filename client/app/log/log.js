angular.module('somthingIAte.log', [])

.controller('LogController', function ($scope, Log, Users, $location) {

  $scope.signout = function() {
    Users.signout();
  }

  $scope.putLog = function (logData) {
    Log.putLog(logData)
    .then(function() {
      $location.path('/stats');
    })
    .catch(function (error) {
      console.error(error);
    });
  };
});
