/**
 * Created by lloydntim on 21/07/2014.
 */

'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:about
 * @description
 * # about
 * Directive for the home component
 */
angular.module('siteApp')
    .directive('about', function () {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/about.html'
        }
    });