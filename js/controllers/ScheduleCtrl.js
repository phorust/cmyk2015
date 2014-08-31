cmyk.controller('ScheduleController', function($scope, $location) {
  $scope.pageClass = 'page-schedule';

  $scope.closePage = function() {
    $location.path('/');
  };
});