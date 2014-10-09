cmyk.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutController'
    })
    .when('/registration', {
      templateUrl: 'views/registration.html',
      controller: 'RegistrationController'
    })
    .when('/schedule', {
      templateUrl: 'views/schedule.html',
      controller: 'ScheduleController'
    })
    // .when('/submission', {
    //   templateUrl: 'views/submission.html',
    //   controller: 'SubmissionController'
    // })
    .otherwise({
      templateUrl: 'views/home.html',
      controller: 'MainController'
    });
}]);