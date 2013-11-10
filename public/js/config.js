//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/slide_1', {
            templateUrl: 'views/slides/slide_1.html',
        }).
        when('/slide_2', {
            templateUrl: 'views/slides/slide_2.html',
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'views/index.html'
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);