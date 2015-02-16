'use strict';

/**
 * @ngdoc function
 * @name wwApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wwApp
 */
angular.module('wwApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
