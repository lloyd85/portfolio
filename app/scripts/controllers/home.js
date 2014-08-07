'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the siteApp
 */
angular.module('siteApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
