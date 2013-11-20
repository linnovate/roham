angular.module('mean.slides').controller('GlobalController', ['$scope', '$routeParams', '$location', 'Global', 'Slides',
	function($scope, $routeParams, $location, Global, Slides) {
		$scope.global = Global;		
		$scope.transitionClass = "index";
		$scope.currentSlide = $location.path().split("/")[2];
		$scope.showSidebar = $scope.currentSlide > 2 ? true : false;

		$scope.$on('$locationChangeSuccess', function(event, newLoc, oldLoc) {
			$scope.transitionClass = $scope.getDirection(newLoc,oldLoc);
			$scope.showSidebar = $location.path().split("/")[2] > 2 ? true : false;
		});


		$scope.getCurrentSlide = function(){			
			var loc = $location.path().split("_");
			return loc.length > 1 ? loc[1] : 0;
		};


		$scope.getDirection = function(newLoc,oldLoc) {
			var direction = "";
			if (newLoc === oldLoc) return;
			var newSlideString = newLoc.split("/")[4],
				oldSlideString = oldLoc.split("/")[4];
			if (newSlideString ==="") {
				direction = "back";
			}
			if (oldSlideString === "") {
				direction = "forward";
			} else {
				var newSlide = parseInt(newSlideString.split("_")[1]),
					oldSlide = parseInt(oldSlideString.split("_")[1]);
				if (!isNaN(newSlide) && !isNaN(oldSlide)) {
					direction = (newSlide > oldSlide ? "forward" : "back");
				}
			}	
			// return direction;
			return "forward";

	};



		
	$scope.moveToTop = function (category,index) {
		console.log(category,index);
       if (index != -1) {
			var obj = $scope.categoryArr[index];
			$scope.categoryArr.splice(index, 1);
			$scope.categoryArr.splice(0,0,obj);
            console.log($scope.categoryArr);
        }
	};

}

]);