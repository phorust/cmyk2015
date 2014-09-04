cmyk.controller('SubmissionController', function($scope, $location) {
  $scope.pageClass = 'page-submission';

  $scope.closePage = function() {
    $location.path('/');
  };
  $scope.place = function(url) {
    $location.path("/" + url);
  }
});