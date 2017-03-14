angular.module('somethingIAte.log', [])

.controller('LogController', function ($scope, Log, Stats, Customize, $location) {
  $scope.foods = {
        foodAcheck: false,
        foodBcheck: false,
        foodCcheck: false,
        foodDcheck: false,
        foodEcheck: false,
        symptoms: false
    };

  $scope.putLog = function (logData) {
    console.log(JSON.stringify($scope.foods));
    Log.putLog($scope.foods)
  };

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
