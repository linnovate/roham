window.app.directive('sidebar', ['Slides',
    function(Slides) {
        return {
            restrict: 'A', // the directive can be invoked only by using <my-directive> tag in the template
            scope: { // attributes bound to the scope of the directive
                // val: '=',
                // title: "@title",
                // questionModel: "=questionmodel"
            },
            transclude: true,
            templateUrl: 'views/sidebar/sidebar.html',

            link: function(scope, element, attrs) {
                scope.slides = Slides;
            }
        };
    }
]).directive('sidebarCell', ['$location', 'Slides', '$routeParams', function($location, Slides, $routeParams) {
    return {
        restrict: 'A', // the directive can be invoked only by using <my-directive> tag in the template
        scope: { // attributes bound to the scope of the directive
            // val: '=',
            label: "@label",
            iconPath: "@icon",
            color: "@color", 
            slideNumber: "@slidenumber",
            index: "@index"
            // questionModel: "=questionmodel"
        },
        transclude: false,
        replace: true,
        templateUrl: 'views/sidebar/sidebar_cell.html',

        link: function(scope, element, attrs) {
            scope.open = false;
            // if ($routeParams.slide_id == scope.slideNumber){
            //     $(element).addClass("active");
            // }
            // else{
            //     $(element).removeClass("active");   
            // }
            
            $(element).hover(function() {
                $(element).addClass("open");
            }, function() {
                $(element).removeClass("open");
            });

            scope.isActive = function(){
                if (Slides.currentSlide == attrs.slidenumber){
                    return true;
                }
                return false;
            };

            scope.gotoSlide = function(slide,index){                
                $location.path("slide/" + slide);
                $(".sidebar_cell").removeClass("active");                
                console.log(index);         
                Slides.updateCurrentSlide(slide,index);
            };  

            // scope.$on('$locationChangeSuccess', function(event, newLoc, oldLoc) {
            //     var newLocation = newLoc.split("/")[5];
            //     Slides.updateCurrentSlide(newLocation)
            //     // if ($routeParams.slide_id == newLocation){
            //     //     $(element).addClass("active");
            //     // }
            //     // else{
            //     //     $(element).removeClass("active");   
            //     // }
            // });          
        }
    };
}]);
