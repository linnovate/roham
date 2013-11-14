window.app.directive('surveyQuestion', function() {
    
    return {
        restrict: 'E', // the directive can be invoked only by using <my-directive> tag in the template
        scope: { // attributes bound to the scope of the directive
            // val: '=',
            // datasrc: "@"
        },
        transclude: true,
        templateUrl: 'views/question.html',
        // template: '<div class="question">This is a question</div>',
        link: function(scope, element, attrs) {
           
        }
    };
});

