angular.module('somethingIAte.stats', [])

.controller('StatsController', function ($scope, Stats, $location) {
  $scope.data = {};

  var getStats = function () {
    Stats.getStats()
    .then(function(stats) {
      $scope.data.stats = stats;
      console.log('stats: ', stats);
    })
    .catch(function (error) {
      console.error(error);
    });
  };
  getStats();


});

