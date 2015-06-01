angular.module("projectAbort").directive('zPresentContainer', function() {
  return {
    templateUrl: 'app/components/zPresentContainer/zPresentContainer.html',
    restrict: 'E',
    scope:{},
    transclude:true,
    link: function(scope, element, attrs) {

    },
    controller: function ($scope) {

      //this should wait for all teh included slides to load before calling Reveal.js

    }

  };
});
