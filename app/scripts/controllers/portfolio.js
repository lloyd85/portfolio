'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the siteApp
 */
angular.module('siteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
