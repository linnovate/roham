angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', 'Slides','$http',
    function($scope, $routeParams, $location, Global, Slides, $http) {
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

        $scope.getInitEndPage = function() {
          console.log('lalala');
          $http.get('/cms/views/slide-13').success(function(slide) {
            console.log(slide);
            $scope.view = slide;
            console.log($scope.view);

          });
        };


/*                function getQuestions() {
            $http.get('/cms/views').success(function(slides) {
                var newSlides = {};
                slides.forEach(function(slide){
                    var questions = slide.fields,
                        newQuestions = [];
                        questions.forEach(function(question){
                        newQuestions.push({
                            title: question.name,
                            body: question.label,
                            val: 0
                        });
                    });

                    newSlides[slide.slideId] = newQuestions;
                });
                _this._obj.questions = newSlides;
            });
        }*/

    }
]);
