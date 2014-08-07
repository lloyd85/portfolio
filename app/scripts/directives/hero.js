/**
 * Created by lloydntim on 16/07/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:home
 * @description
 * # home
 * Directive for hero section of portfolio
 */
angular.module('siteApp')
    .directive('hero', function () {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/hero.html',
            controller: function () {
                var hero = document.querySelector('#hero');
                var heroTextWrapper = document.querySelector('#hero-text-wrapper');

                var heroText1 = document.querySelector('#hero-text1');
                var heroText2 = document.querySelector('#hero-text2');
                var heroText3 = document.querySelector('#hero-text3');
                var heroSubtext = document.querySelector('#hero-subtext');

                this.init = function () {
                    console.log('init');
                    TweenLite.to(hero, 2, {opacity:1, delay: 1});
                    TweenLite.to(heroTextWrapper, 1, {top:'200px', opacity:1, delay:1.5});

                    TweenLite.to(heroText1, .5, {opacity:1, delay: 2});
                    TweenLite.to(heroText2, .5, {opacity:1, delay: 2.25});
                    TweenLite.to(heroText3, .5, {opacity:1, delay: 2.5});
                    TweenLite.to(heroSubtext, 1, {opacity:.5, delay: 3.5});
                };
            },

            link: function (scope, elem, attrs, ctrl) {
                ctrl.init();
            }
        };
    });