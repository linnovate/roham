angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', 'Slides','$http', '$filter',
    function($scope, $routeParams, $location, Global, Slides, $http, $filter) {
        $scope.global = Global;
        $scope.transitionClass = Global.transitionClass;
        $scope.isActiveBtn = [false, false];
        $scope.currentSlide = $routeParams.slide_id;
        $scope.slides = Slides;
        $scope.titles = $scope.slides.titles;
        $scope.questions = Slides.questions["slide-" + $scope.currentSlide];
       
        $scope.introduction = Slides.introduction["slide-" + $scope.currentSlide];
                
        function saveSlideAnswers(){
            Global.getAnswers({id: parseInt($scope.currentSlide), answers: $scope.questions});            
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
            var list = ["age", "kind", "education", "city"];
            angular.forEach(list,function(field) {
                question = {
                    "body" : field,
                    "title" : field,
                    "val" : $scope[field]
                };
                data.push(question);
            });
            Global.getAnswers({id: 1, answers: data});
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
