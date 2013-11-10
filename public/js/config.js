//Setting up route
window.app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/index");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "/",
      templateUrl: "views/index.html",
      controller: 'SlidesController'
    })
    .state('slide_1', {
      url: "/slide_1",
      templateUrl: "views/slides/slide_1.html",
      controller: 'SlidesController'
    })
    .state('slide_1.list', {
      url: "/slide_1/sub_1",
      templateUrl: "views/slides/slide_1.list.html",
      controller: 'SlidesController'
    })
    .state('slide_2', {
      url: "/slide_2",
      templateUrl: "views/slides/slide_2.html",
      controller: 'SlidesController'
    })
    .state('slide_2.list', {
        url: "/list",
        templateUrl: "views/slides/slide_2.list.html",
        controller: 'SlidesController'
      });
    });

//Setting HTML5 Location Mode
window.app.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.hashPrefix("!");
    }
]);