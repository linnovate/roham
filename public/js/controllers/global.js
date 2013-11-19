angular.module('mean.slides').controller('GlobalController', ['$scope', '$routeParams', '$location', 'Global', 'Slides',
	function($scope, $routeParams, $location, Global, Slides) {
		$scope.global = Global;		
		$scope.transitionClass = "index";
		
		$scope.showSidebar = Slides.currentSlide > 3 ? true : false;

		$scope.$on('$locationChangeSuccess', function(event, newLoc, oldLoc) {
			$scope.transitionClass = $scope.getDirection(newLoc,oldLoc);
			Slides.currentSlide = $scope.getCurrentSlide();
			$scope.showSidebar = Slides.currentSlide > 3 ? true : false;
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
			return direction;

	};



		$scope.categoryArr = [
			{slide:3,menu:'family',label:'משפחה', icon:'img/sidebar/family.png', color:'red' },
			{slide:4,menu:'eco', label:'משפחה', icon:'img/sidebar/eco.png', color:'dark_green' },
			{slide:5,menu:'sec', label:'משפחה', icon:'img/sidebar/sec.png', color:'pink' },
			{slide:6,menu:'edu', abel:'משפחה', icon:'img/sidebar/edu.png', color:'bright_turqioze' },
			{slide:7,menu:'emplo', label:'משפחה', icon:'img/sidebar/emplo.png', color:'yellow' },
			{slide:8,menu:'envi', label:'משפחה', icon:'img/sidebar/family.png', color:'bright_green' },
			{slide:9,menu:'law', label:'משפחה', icon:'img/sidebar/family.png', color:'orange' },
			{slide:10,menu:'dior', label:'משפחה', icon:'img/sidebar/family.png', color:'dark_turqioze' },
			{slide:11,menu:'healt', label:'משפחה', icon:'img/sidebar/family.png', color:'purple' },
			{slide:12,menu:'other', label:'משפחה', icon:'img/sidebar/family.png', color:'blue' },
		];

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