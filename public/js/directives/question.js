window.app.directive('surveyQuestion', function() {

    return {
        restrict: 'E', // the directive can be invoked only by using <my-directive> tag in the template
        scope: { // attributes bound to the scope of the directive
            // val: '=',
            title: "@title",
            questionModel: "=questionmodel"
        },
        transclude: true,
        templateUrl: 'views/question.html',

        link: function(scope, element, attrs) {

        }
    };
});
