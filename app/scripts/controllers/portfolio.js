'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the siteApp
 */
angular.module('siteApp')
  .controller('PortfolioCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
