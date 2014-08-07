/**
 * Created by lloydntim on 16/07/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:googleMap
 * @description
 * # googleMap
 * Directive for re-usable google map bg component
 */
angular.module('siteApp')
    .directive('googleMap', function () {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/google-map.html',
            controller: function () {
                var mapOptions,
                    latitude,
                    longitude,
                    map;
               // center: new google.maps.LatLng(51.508742, -0.033796),
                latitude = latitude && parseFloat(latitude, 10) || 51.508742;
                longitude = longitude && parseFloat(longitude, 10) || -0.033796;

                mapOptions = {
                    center: new google.maps.LatLng(latitude, longitude),
                    zoom:15,
                    disableDefaultUI:true,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };

                //map = new google.maps.Map(elem[0], mapOptions);
                this.init = function () {
                    map = new google.maps.Map(document.getElementById("googleMapBg"), mapOptions);
                };
            },

            link: function (scope, elem, attrs, ctrl) {
                ctrl.init();
            }
        };
    });