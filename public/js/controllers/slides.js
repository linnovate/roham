angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', 'Slides','$http',
    function($scope, $routeParams, $location, Global, Slides, $http) {
        $scope.global = Global;
        $scope.transitionClass = Global.transitionClass;
        $scope.isActiveBtn = [false, false];
        $scope.currentSlide = $routeParams.slide_id;
        $scope.slides = Slides;
        
        $scope.questions = Slides.questions["slide-" + $scope.currentSlide];

        $scope.gotoNext = function(){
            var next_index = parseInt(Slides.currentIndex) + 1,
                next = $scope.slides.slidesOrder[next_index].slide;

            $location.path("/slide/" + next);

            Slides.saveSlideAnswers($scope.currentSlide,$scope.questions,Global.session_id);
            Slides.updateCurrentSlide(next,next_index);
        };

        $scope.getInitEndPage = function() {
            console.log("getInitEndPage");
          $http.get('/cms/views/slide-12').success(function(slide) {
            $scope.slide= slide;
            console.log(slide);
            $scope.views = slide;
            $scope.values = {};
            angular.forEach($scope.views.fields,function(field) {
                $scope.values[field.name] = field.label;
            });
            console.log($scope.values);
          });
        };
    }
]);