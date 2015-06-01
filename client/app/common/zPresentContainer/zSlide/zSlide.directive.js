angular.module("zPresent").directive('zSlide', function() {
  return {
    templateUrl: 'app/components/zSlide/zSlide.html',
    restrict: 'E',
    scope:{},
    require:"^zPresentController",
    link: function(scope, element, attrs) {},
    controller: function ($scope) {

    }
  };
});
