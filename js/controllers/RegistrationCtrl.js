cmyk.controller('RegistrationController', function($scope, $location) {
  $scope.pageClass = 'page-registration';

  $scope.closePage = function() {
    $location.path('/');
  };
});