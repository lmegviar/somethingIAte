angular.module('somethingIAte.customize', [])

.controller('CustomizeController', function ($scope, Customize, $location) {

  $scope.custom = {
        foodAcheck: 'Dairy',
        foodBcheck: 'Soy',
        foodCcheck: 'Peanuts',
        foodDcheck: 'Refined Flour',
        foodEcheck: 'Refined Sugar',
        symptoms: 'Malaise'
    };

  $scope.customizeLog = function (customData) {
    Customize.customizeLog($scope.custom)
  };
});
