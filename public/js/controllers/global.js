angular.module('mean.slides').controller('GlobalController', ['$scope', '$routeParams', '$location', 'Global', 'Slides',
    function($scope, $routeParams, $location, Global, Slides) {
        $scope.global = Global;
        $scope.transitionClass = "index";
        $scope.currentSlide = $location.path().split("/")[2];
        $scope.showSidebar = $scope.currentSlide > 2 ? true : false;

        $scope.$on('$locationChangeSuccess', function(event, newLoc, oldLoc) {
            $scope.transitionClass = $scope.getDirection(newLoc, oldLoc);
            $scope.showSidebar = $location.path().split("/")[2] > 2 ? true : false;

            var newLocation = newLoc.split("/")[5];
            var newIndex = Slides.categoryArr;
            // Slides.updateCurrentSlide(newLocation);
        });


        $scope.getCurrentSlide = function() {
            var loc = $location.path().split("_");
            return loc.length > 1 ? loc[1] : 0;
        };


        $scope.getDirection = function(newLoc, oldLoc) {
            if (newLoc === oldLoc) return;
            var newLocation = newLoc.split("/")[5],
                oldLocation = oldLoc.split("/")[5];
            if (typeof(oldLocation) == "undefined") {
                return "forward";
            }
            return newLocation > oldLocation ? "forward" : "back";

        };
    }

]);
