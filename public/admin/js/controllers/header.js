angular.module('roham-admin.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Users",
        "link": "users"
    }, {
        "title": "Views",
        "link": "views"
    }, {
        "title": "Answers",
        "link": "answers"
    }];
}]);