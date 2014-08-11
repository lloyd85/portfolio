/**
 * Created by lloydntim on 16/07/2014.
 */
'use strict';

/**
 * @ngdoc function
 * @name siteApp.directive:pieChart
 * @description
 * # pieChart
 * Directive for re-usable pie chart component
 */
angular.module('siteApp')
    .directive('pieChart', function (pieChartService) {
        return {
            scope: {},  // use a new isolated scope
            restrict: 'AE',
            replace: 'true',
            templateUrl: '../views/pie-chart.html',
            controller: function () {

                var service = pieChartService;

                this.init = function() {

                    var canvas = document.getElementById('pie-chart-canvas'),
                        ctx = canvas.getContext('2d'),

                        CENTER = [canvas.width / 2, canvas.height / 2],
                        RADIUS = Math.min(canvas.width, canvas.height) / 2,
                        lastPosition = 0, total = 0,
                        result,

                        data = service.getData(),

                        /*titles = data.map(function(obj){
                            return obj.title;
                        }),*/
                        degrees = data.map(function(obj){
                            return convertPercentToDegree(obj.percent);
                        }),
                        colors = data.map(function(obj) {
                            return obj.color;
                        });

                    function convertPercentToDegree (percent) {
                        result = percent * 3.6;
                        return result;
                    }

                    function getSumOfDegrees (arr) {
                        for (var i = 0, l = arr.length;  i < l; i++) {
                            total += arr[i];
                        }
                    }

                    function draw () {
                        for (var i = 0, l= degrees.length; i < l; i++) {
                            ctx.fillStyle = colors[i];
                            ctx.beginPath();
                            ctx.moveTo(CENTER[0], CENTER[1]);
                            ctx.arc(CENTER[0], CENTER[1], RADIUS, lastPosition, lastPosition+(Math.PI * 2 * (degrees[i] / total)), false);
                            ctx.lineTo(CENTER[0],CENTER[1]);
                            ctx.fill();

                            lastPosition += Math.PI * 2 * (degrees[i] / total);
                        }
                    }

                    getSumOfDegrees(degrees);
                    draw();
                };

                this.getLegendTitles = function (scope) {
                    scope.data = service.getData();
                };
            },

            link: function (scope, elem, attrs, ctrl) {

                var ctx = elem[0];
                console.log(ctx);
                ctrl.init(elem);

                ctrl.getLegendTitles(scope);
               // ctrl.drawPieChart();
            }
        };
    });