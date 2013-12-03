angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'Slides', '$rootScope',
    function($scope, Global, Slides, $rootScope) {
        $scope.global = Global;
        $scope.slides = angular.copy(Slides);

        $scope.moveToTop = function(index) {
            Slides = Slides.moveToTop(index);
        };

        $scope.init = function() {
            Global.getSessionId(function(sessionId){
                console.log("Joined session: ", sessionId);
            });
        
        };

    }
]);
