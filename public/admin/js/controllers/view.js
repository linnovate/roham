angular.module('roham-admin.views').controller('ViewController', ['$scope', '$routeParams', 'Views',
    function($scope, $routeParams, Views) {
        $scope.add = function() {
            if (!$scope.view.fields) $scope.view.fields = [];

            $scope.view.fields.push({
                name: this.name,
                label: this.label
                slideIdRef: this.slideIdRef
            });
            $scope.update();

            this.name = this.label = "";
        };

        $scope.remove = function(field) {
            for (var i in $scope.view.fields) {
                if ($scope.view.fields[i] == field) {
                    $scope.view.fields.splice(i, 1);
                }
            }

            $scope.update();
        };

        $scope.update = function() {
            $scope.view.$update();
            
            for (var i in $scope.view.fields) {
                $scope.view.fields[i].fieldId = $scope.view.fields[i].name.toLowerCase().replace(/ /g,'-');
            }
        };

        $scope.init = function() {
            Views.get({
                slideId: $routeParams.slideId
            }, function(view) {
                $scope.view = view;
            });
        };
    }
]);