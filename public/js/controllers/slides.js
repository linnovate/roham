angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', 'Slides',
    function($scope, $routeParams, $location, Global, Slides) {
        $scope.global = Global;

        $scope.transitionClass = Global.transitionClass;
        $scope.isActiveBtn = [false, false];
        $scope.currentSlide = $routeParams.slide_id;
        $scope.slides = Slides;
        
        $scope.questions = Slides.questions["slide-" + $scope.currentSlide];

        // console.log($scope.questions);

        $scope.gotoNext = function(){
            var next_index = parseInt(Slides.currentIndex) + 1,
                next = $scope.slides.slidesOrder[next_index].slide;

            $location.path("/slide/" + next);

            Slides.saveSlideAnswers($scope.currentSlide,$scope.questions,Global.session_id);
            Slides.updateCurrentSlide(next,next_index);
        };       
    }
]);
