angular.module('roham-admin.results').controller('ResultsController', ['$scope', 'Results',
    function($scope, Answers) {
        $scope.init = function() {
            Answers.query({}, function(answers) {
                $scope.results = answers;
                $scope.columns = [];
                angular.forEach(answers[0].results, function(a){$scope.columns.push(a.title)});
                $scope.links =[];
                $scope.rows = Math.floor($scope.results.length/2);
                links = ($scope.rows == $scope.results.length/2) ? $scope.rows : $scope.rows+1;
                for (i=0; i<links; i++ )
                	$scope.links.push(i*$scope.rows);
            });
        };

        
    }
]);