window.app.directive('sidebar', function() {
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
            
        }
    };
}).directive('sidebarCell', function() {
    return {
        restrict: 'A', // the directive can be invoked only by using <my-directive> tag in the template
        scope: { // attributes bound to the scope of the directive
            // val: '=',
            label: "@label",
            iconPath: "@icon",
            color: "@color"
            // questionModel: "=questionmodel"
        },
        transclude: true,
        replace: true,
        templateUrl: 'views/sidebar/sidebar_cell.html',

        link: function(scope, element, attrs) {
            scope.open = false;
            $(element).hover(function() {
                $(element).addClass("open");
            }, function() {
                $(element).removeClass("open");
            });
        }
    };
});
