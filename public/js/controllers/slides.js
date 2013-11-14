angular.module('mean.slides').controller('SlidesController', ['$scope', '$routeParams', '$location', 'Global', function ($scope, $routeParams, $location, Global) {
    $scope.global = Global;

    $scope.transitionClass = Global.transitionClass;
    $scope.isActiveBtn = [ false, false ];

    $scope.test = 4;

}]);