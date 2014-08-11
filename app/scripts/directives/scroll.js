/**
 * Created by lloydntim on 16/07/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:scroll
 * @description
 * # scroll
 * Directive which controls scrolling
 */
angular.module('siteApp')
    .directive('scroll', function ($window, $location, anchorSmoothScroll) {
        return {
            controller: function() {
                this.gotoElement = function (eID, offset) {
                    // set the location.hash to the id of
                    // the element you wish to scroll to.
                    $location.hash(eID);

                    // call $anchorScroll()
                    anchorSmoothScroll.scrollTo(eID, offset);
                };
            },
            link: function (scope, elem, attrs, ctrl) {
                /* Refactor the whole function */
                function init() {
                    var windowEl = angular.element($window);

                    function handler() {

                        var scrollTop = ($window.pageYOffset || document.scrollTop) - (document.clientTop || 0),
                            nav = document.getElementsByClassName('theme-header')[0],
                            navHeight = 80;

                        if (scrollTop < navHeight || isNaN(scrollTop)) {
                            angular.element(nav).removeClass('is-bottom fadeOutIn');
                        } else {
                            angular.element(nav).addClass('is-bottom fadeOutIn');
                        }

                        angular.forEach(elem.find('section'), function (value) {
                            var speed = value.dataset.speed,
                                type = value.dataset.type;

                            if (type) {
                                angular.element($window).bind('scroll', function () {

                                    var yPos = -(scrollTop / speed);
                                    //console.log('speed: ' + speed + ' i: ' + i);
                                    // Put together our final background position
                                    var coords = '50% ' + yPos + 'px';

                                    value.style.backgroundPosition = coords;

                                    scope.$apply();
                                });
                            }
                        });
                    }

                    windowEl.on('scroll', scope.$apply.bind(scope, handler));
                }
                scope.gotoElement = ctrl.gotoElement;
                scope.$on('$viewContentLoaded', init);
            }
        };
    });