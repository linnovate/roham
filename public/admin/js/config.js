//Setting up route
angular.module('roham-admin').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/users', {
            templateUrl: 'admin/views/users.html'
        }).
        when('/', {
            templateUrl: 'admin/views/index.html'
        }).
        when('/views', {
            templateUrl: 'admin/views/views.html'
        }).
        when('/views/:slideId', {
            templateUrl: 'admin/views/view.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);

//Setting HTML5 Location Mode
angular.module('roham-admin').config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);