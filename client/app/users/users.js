angular.module('somethingIAte.users', [])

.controller('UsersController', function ($scope, $window, $location, Users) {
  $scope.user = {};

  $scope.login = function () {
    Users.login($scope.user)
      .then(function () {
        //JWT --> Research
      .then(function (token) {
        $window.localStorage.setItem('eatThisToken', token);
        $location.path('/log');
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  $scope.signup = function () {
    Users.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem('eatThisToken', token);
        $location.path('/log');
      })
      .catch(function (error) {
        console.error(error);
      });
  };
});
