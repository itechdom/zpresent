import template from './zSlide.html';
import controller from './zSlide.controller.js';
import reveal from 'reveal';


let zSlideComponent = function(){
  var dir =  {
    template,
    controller,
    link: function(scope, element, attrs) {

    },
    transclude:true,
    restrict: 'E',
    controllerAs: 'vm',
    scope: {},
    bindToController: true
  };
  return dir;

};

export default zSlideComponent;