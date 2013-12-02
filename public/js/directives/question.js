window.app.directive('surveyQuestion', function() {

    return {
        restrict: 'E', // the directive can be invoked only by using <my-directive> tag in the template
        scope: { // attributes bound to the scope of the directive
            // val: '=',
            title: "@title",
            ngModel: "="
        },
        transclude: true,
        templateUrl: 'views/question.html'
        // compile: function()
        // link: function(scope, element, attrs) {
        //     console.log(scope);
        //     // scope.sliderValue = scope.questionmodel;    
        // }
    };
});
