cmyk.controller('RegistrationController', function($scope, $location) {
  $scope.pageClass = 'page-registration';

  $scope.closePage = function() {
    $location.path('/');
  };
  $scope.place = function(url, disabled) {
    if (disabled == true) {
        console.log('Please check back for updates!');
    } else {
        $location.path("/" + url);
    }
  }
});