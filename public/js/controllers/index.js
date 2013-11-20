angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'Slides', '$rootScope',
    function($scope, Global, Slides, $rootScope) {
        $scope.global = Global;
        $scope.slides = Slides;

        $scope.moveToTop = function(index){
            Slides = Slides.moveToTop(index);
        };

    }
]);
