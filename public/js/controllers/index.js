angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$rootScope', function ($scope, Global, $rootScope) {
    $scope.global = Global;
}]);