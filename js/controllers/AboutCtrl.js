cmyk.controller('AboutController', function($scope, $location) {
  $scope.pageClass = 'page-about';

  $scope.closePage = function() {
    $location.path('/');
  };
});