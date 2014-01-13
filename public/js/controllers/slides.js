angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', 'Slides','$http',
    function($scope, $routeParams, $location, Global, Slides, $http) {
        $scope.global = Global;
        $scope.transitionClass = Global.transitionClass;
        $scope.isActiveBtn = [false, false];
        $scope.currentSlide = $routeParams.slide_id;
        $scope.slides = Slides;
        
        $scope.questions = Slides.questions["slide-" + $scope.currentSlide];

        function saveSlideAnswers(){
            if ($scope.currentSlide < 12){
                name = $scope.slides.slidesOrder[parseInt(Slides.currentIndex)].label;
                other_question = {"body" : name, "title" : "נושא נוסף בתחום ה" + name, "val" : ($scope.other) ? $scope.other : ""};
                $scope.questions.push(other_question);
            }
            Global.getAnswers({id: parseInt($scope.currentSlide) ,slideId: "slide-" + $scope.currentSlide, answers: $scope.questions});
        }
        
        $scope.gotoNext = function(){
            saveSlideAnswers();
            var next_index = parseInt(Slides.currentIndex) + 1,
            next = $scope.slides.slidesOrder[next_index].slide;

            $location.path("/slide/" + next);
            Slides.updateCurrentSlide(next,next_index);
        };

        $scope.goToEnd = function(){
            saveSlideAnswers();
            Slides.saveAllAnswers(Global.getAnswers(null),Global.session_id);
            $location.path("/slide/13");
        };

        $scope.setFirstSlide = function(){
            var data = [];
            var list = ["age", "kind", "education"];
            angular.forEach(list,function(field) {
                question = {
                    "body" : field,
                    "title" : field,
                    "val" : $scope[field]
                };
                data.push(question);
            });
            Global.getAnswers({id: 1, slideId: "slide-1", answers: data});
            $location.path("/slide/2");
        };

        $scope.getInitEndPage = function() {
            $http.get('/cms/views/slide-13').success(function(slide) {
                $scope.views = slide;
                $scope.values = {};
                angular.forEach($scope.views.fields,function(field) {
                    $scope.values[field.name] = field.label;
                });
          });
        };
    }
]);
