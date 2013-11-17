angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$rootScope', function ($scope, Global, $rootScope) {
    $scope.global = Global;
    $scoope.urllArr[
    	{"sec.png"},{"eco.1.png"},{"fami.1.png"}
    ];
    alert("lala");
    app.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
});


}]);