angular.module('somthingIAte.stats', [])

.controller('StatsController', function ($scope, Stats, Users, $location) {
  $scope.data = {};

  $scope.signout = function() {
    Users.signout();
  }

  var getStats = function () {
    Stats.getStats()
    .then(function(stats) {
      $scope.data.stats = stats;
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  getStats();
});

