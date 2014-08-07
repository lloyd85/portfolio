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
    .directive('scroll', function ($window) {
        return function (scope, elem) {

            /*  angular.forEach(document.querySelector('.photo-section'), function(value) {
                var bgobj = angular.element(value);

                var windowEl = angular.element($window);

                windowEl.on('scroll', scope.$apply.bind(scope, handler));

                function handler () {
                    var yPos = $window.scrollTop(); //.scrollTop() / 30;

                    console.log(yPos);
                }

                angular.element($window).bind('scroll', function () {

                 var yPos = 7; //-($window.scrollTop() / bgobj.data('speed'));

                 // Put together our final background position
                 var coords = '50% ' + yPos + 'px';
                 console.log('co-ords: ' + coords );
                 console.log('bgobj: ' + bgobj );
                 // Move the background
                 // bgobj.css({ backgroundPosition: coords });

                 $scope.$apply();
                 });


            });*/


            /* Refactor the whole function */
            function init () {
                var windowEl = angular.element($window);


                function handler () {

                    var scrollTop = ($window.pageYOffset || document.scrollTop) - (document.clientTop || 0),
                        nav = document.getElementsByClassName('theme-header')[0],
                        navHeight = 80;

                    if (scrollTop < navHeight || isNaN(scrollTop)) {
                        angular.element(nav).removeClass('is-bottom');
                    } else {
                        angular.element(nav).addClass('is-bottom');
                    }

                    angular.forEach(elem.find('section'), function(value) {
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
                        };
                    });
                }
                windowEl.on('scroll', scope.$apply.bind(scope, handler));
            }
            scope.$on('$viewContentLoaded', init);
        };
    });