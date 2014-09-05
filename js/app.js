var cmyk = angular.module('cmyk', ['ngRoute', 'ngTouch', 'ngAnimate']);

cmyk.directive("scrollDirection", function ($window) {
  return function(scope, element, attrs) {
    var lastScrollTop = 0;
    angular.element($window).bind("scroll", function() {
      var st = $(this).scrollTop();
      if (st > lastScrollTop){
        scope.scrollUp = false;
      } else {
        scope.scrollUp = true;
      }
      lastScrollTop = st;
      scope.$apply();
    });
  };
});