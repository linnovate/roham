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
        when('/slide_3', {
            templateUrl: 'views/slides/slide_3.html',
        }).
        when('/slide_4', {
            templateUrl: 'views/slides/slide_4.html',
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'views/slides/slide_1.html',
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);