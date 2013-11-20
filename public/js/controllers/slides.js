angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', 'Slides',
    function($scope, $routeParams, $location, Global, Slides) {
        $scope.global = Global;

        $scope.transitionClass = Global.transitionClass;
        $scope.isActiveBtn = [false, false];
        $scope.currentSlide = $routeParams.slide_id;
        $scope.slides = Slides;

        

        //TODO: Change this
        $scope.questions = Slides.categoryArr[$scope.currentSlide-3].questions;

       
    }
]);
