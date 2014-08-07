/**
 * Created by lloydntim on 21/07/2014.
 */

'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:contact
 * @description
 * # contact
 * Directive for the home component
 */
angular.module('siteApp')
    .directive('contact', function () {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/contact.html'
        }
    });