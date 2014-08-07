/**
 * Created by lloydntim on 21/07/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:portfolio
 * @description
 * # portfolio
 * Directive for portfolio section of portfolio
 */
angular.module('siteApp')
    .directive('portfolio', function () {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/portfolio.html'
        }
    });