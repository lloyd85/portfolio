/**
 * Created by lloydntim on 21/07/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:gallery
 * @description
 * # gallery
 * Directive for gallery section of gallery
 */
angular.module('siteApp')
    .directive('gallery', function () {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/portfolio.html',
            controller: function () {

                /* TODO - Make this data come form a service eg dataService.gePortfolioData */

                var imageContent = document.querySelector('#gallery-image-content'),
                   // closeButton = document.querySelector('#gallery-btn-close'),
                  //  thumbnail = document.querySelector('.gallery-thumb'),
                    data = [
                    {
                        client: 'Salmon Ltd',
                        brand: 'Dulux',
                        desc: 'Build and modified entire frontend for Dulux by implementing new styles and Javascrript',
                        tech: 'KnockoutJS, HTML5, CSS3, SASS, GIT',
                        imageUrl: 'images/portfolio/images/img01.jpg',
                        thumbUrl: 'images/portfolio/thumbs/thum01.jpg'
                    },
                    {
                        client: 'Skyscanner Ltd',
                        brand: 'Skyscanner B2B',
                        desc: 'Rebuild the entire frontend for the Skyscanner B2B Website using the latest web design trends',
                        tech: 'HTML5, CSS3, LESS, jQuery, ASP.NET MVC',
                        imageUrl: 'images/portfolio/images/img02.jpg',
                        thumbUrl: 'images/portfolio/thumbs/thum02.jpg'
                    },
                    {
                        client: 'Skyscanner Ltd',
                        brand: 'Lonely Planet',
                        desc: 'Integrated Skyscanner component for official Lonely Planet website and re-styled it',
                        tech: 'HTML5, CSS3, LESS, ASP.NET MVC',
                        imageUrl: 'images/portfolio/images/img03.jpg',
                        thumbUrl: 'images/portfolio/thumbs/thum03.jpg'
                    },
                    {
                        client: 'Age UK',
                        brand: 'Age UK',
                        desc: 'Responsible for imagery, it\'s selection of the website',
                        tech: 'HTML, CSS, Photoshop, Content Management',
                        imageUrl: 'images/portfolio/images/img04.jpg',
                        thumbUrl: 'images/portfolio/thumbs/thum04.jpg'
                    }
                ];

                this.hideImagePane = function () {
                    return function () {
                       imageContent.addClass('l-hidden');
                    };
                };

                this.showImagePane = function () {
                    imageContent.removeClass('l-hidden');
                };

                this.getGalleryData = function () {
                    return data;
                };

                this.init = function () {
                    //closeButton.click(hideImagePane);
                  //  thumbnail.click(showImagePane);
                };
            },

            link: function (scope, elem, attrs, ctrl) {
                scope.data = ctrl.getGalleryData();
                scope.hideImage = ctrl.hideImagePane();
               // scope.showImage = ctrl.showImagePane;
                ctrl.init();
            }
        };
    });