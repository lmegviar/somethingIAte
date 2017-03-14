angular.module('somethingIAte.customize', [])

.controller('CustomizeController', function ($scope, Customize, $location) {

  $scope.custom = {
        foodAcheck: 'Food 1',
        foodBcheck: 'Food 2',
        foodCcheck: 'Food 3',
        foodDcheck: 'Food 4',
        foodEcheck: 'Food 5',
        symptoms: 'Main Symptom'
    };

  $scope.customizeLog = function (customData) {
    Customize.customizeLog($scope.custom)
  };
});
