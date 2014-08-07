/**
 * Created by lloydntim on 20/07/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:home
 * @description
 * # home
 * Directive for the home component
 */
angular.module('siteApp')
    .directive('home', function () {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/home.html'
        }
    });