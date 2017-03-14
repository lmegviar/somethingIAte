angular.module('somethingIAte.log', [])

.controller('LogController', function ($scope, Log, $location, $state) {

  $scope.foods = {
        foodAcheck: false,
        foodBcheck: false,
        foodCcheck: false,
        foodDcheck: false,
        foodEcheck: false,
        symptons: false
    };

  $scope.checkList = {};

  $scope.putLog = function (logData) {
    console.log(JSON.stringify($scope.foods));
    Log.putLog($scope.foods)
  };
});
