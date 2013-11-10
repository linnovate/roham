angular.module('mean.slides').controller('SlidesController', ['$scope', 'Global', '$timeout', function ($scope, Global, $timeout) {
	$scope.visible = false;
	$scope.$on('$stateChangeSuccess', 
		function(event, toState, toParams, fromState, fromParams){			
			$timeout(function(){
				$scope.visible = true;
			}, 400);
			
		});
	
}])