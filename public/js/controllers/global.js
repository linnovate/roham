angular.module('mean.slides').controller('GlobalController', ['$scope', '$routeParams', '$location', 'Global', function ($scope, $routeParams, $location, Global) {
    $scope.global = Global;
    $scope.transitionClass = "index";
    $scope.currentSlide = 0;

    $scope.$on('$locationChangeStart', function(event, newLoc, oldLoc){
		if (newLoc === oldLoc) return;    			
    	var newSlideString = newLoc.split("/")[4], oldSlideString = oldLoc.split("/")[4];   
    	if (newSlideString == ""){
    		$scope.transitionClass = "back";
    	}
    	if (oldSlideString == ""){
    		$scope.transitionClass = "forward";	
    	}

    	else{
    		var newSlide = parseInt(newSlideString.split("_")[1]), oldSlide = parseInt(oldSlideString.split("_")[1]);	
    		if (!isNaN(newSlide) && !isNaN(oldSlide)){
				$scope.transitionClass = (newSlide > oldSlide ? "forward" : "back");
	    	}
    	}
    });
}]);