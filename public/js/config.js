//Setting up route
window.app.config(['$routeProvider',
    function($routeProvider,$routeParams) {
        $routeProvider.
        when('/slide/:slide_id', {
            // templateUrl: 'views/slides/slide_1.html',
            templateUrl: function(params){ return 'views/slides/slide_' + params.slide_id + '.html'; }
        }).
        otherwise({
            redirectTo: '/',
            templateUrl: 'views/index.html',
        });
    }
]);

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);