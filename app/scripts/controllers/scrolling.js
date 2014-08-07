/**
 * Created by lloydntim on 24/07/2014.
 */
angular.module('siteApp')
    .controller('ScrollingController', function ($scope){
        $scope.values = ['test'];

        $(document).ready(function(){
            $('section[data-type="background"]').each(function(){
                var $bgobj = $(this); // assigning the object

                $(window).scroll(function() {
                    var yPos = -($window.scrollTop() / $bgobj.data('speed'));

                    // Put together our final background position
                    var coords = '50% '+ yPos + 'px';

                    // Move the background
                    $bgobj.css({ backgroundPosition: coords });
                });
            });
        });
    });