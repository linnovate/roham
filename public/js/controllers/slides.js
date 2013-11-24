angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', 'Slides',
    function($scope, $routeParams, $location, Global, Slides) {
        $scope.global = Global;

        $scope.transitionClass = Global.transitionClass;
        $scope.isActiveBtn = [false, false];
        $scope.currentSlide = $routeParams.slide_id;
        $scope.slides = Slides;
        
        //TODO: Change this
        $scope.questions = Slides.questions["slide_" + $scope.currentSlide];

        $scope.gotoNext = function(){
            // var next_id = parseInt($scope.currentSlide) + 1;
            var next_index = parseInt(Slides.currentIndex) + 1; 
            console.log("next", next_index);
            // console.log($scope.slides.categoryArr[next_index.slide);
            var next = $scope.slides.categoryArr[next_index].slide;
            // // console.log("next",next);
            $location.path("/slide/" + next);

            Slides.updateCurrentSlide(next,next_index);

        };
       
    }
]);
