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
]).directive('sidebarCell', ['$location', function($location) {
    return {
        restrict: 'A', // the directive can be invoked only by using <my-directive> tag in the template
        scope: { // attributes bound to the scope of the directive
            // val: '=',
            label: "@label",
            iconPath: "@icon",
            color: "@color", 
            slideNumber: "@slidenumber"
            // questionModel: "=questionmodel"
        },
        transclude: false,
        replace: true,
        templateUrl: 'views/sidebar/sidebar_cell.html',

        link: function(scope, element, attrs) {
            scope.open = false;
            $(element).hover(function() {
                $(element).addClass("open");
            }, function() {
                $(element).removeClass("open");
            });

            scope.gotoSlide = function(slide){
                $location.path("slide/" + slide);
            };            
        }
    };
}]);
