import template from './zPresent.html';
import controller from './zPresent.controller.js';
import reveal from 'reveal'


let zPresentComponent = function(){
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

export default zPresentComponent;
