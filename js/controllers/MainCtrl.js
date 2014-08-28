cmyk.controller('MainController', function($scope, $location) {
  $scope.place = function(url, disabled) {
    if (!disabled) {
      $location.path("/" + url);
    }
  }

  $scope.pageClass = 'page-home';
});