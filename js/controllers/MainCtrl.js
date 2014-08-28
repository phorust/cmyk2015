cmyk.controller('MainController', function($scope, $location) {
  $scope.place = function(url) {
    $location.path("/" + url);
    console.log(url);
    console.log('emily is testing stuff');
  }

  $scope.pageClass = 'page-home';
});