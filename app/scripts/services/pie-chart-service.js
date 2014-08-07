/**
 * Created by lloydntim on 16/07/2014.
 */

'use strict';

/**
 * @ngdoc function
 * @name siteApp.service:pieChartService
 * @description
 * # pieChartService
 * Service for re-usable pie chart component
 */

angular.module('siteApp')
    .service('pieChartService', function () {

            /*
             *
             * TODO: This data will be replaced with data from a DataService providing the colors and titles
             *
             * */
        var data = [
                {title: 'JS', color: '#4f1d12', percent: 35 },
                {title: 'HTML 5/ CSS', color: '#7d2c1a', percent: 20 },
                {title: 'TDD', color: '#a74630', percent: 15 },
                {title: 'GIT', color: '#df765f', percent: 10 },
                {title: 'AngularJS and NodeJS', color: '#bb3030', percent: 15 },
                {title: 'AGILE', color: '#f6d6d6', percent: 5 }
            ];

        this.getData = function () {
            return data;
        };

        this.titles = data.map(function(obj){
            return obj.title;
        });

        this.degrees = data.map(function(obj){
            return convertPercentToDegree(obj.percent);
        });

        this.colors = data.map(function(obj){
            return obj.color;
        });

        function convertPercentToDegree (percent) {
            var result = percent * 3.6;
            return result;
        }

        /*function getSumOfDegrees (arr) {
            for (var i = 0, l = arr.length;  i < l; i++) {
                total += arr[i];
            }
        }*/

        /*
        * TODO: make function public
        * */


    });