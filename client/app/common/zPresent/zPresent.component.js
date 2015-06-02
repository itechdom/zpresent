import template from './zPresent.html';
import controller from './zPresent.controller.js';
import Reveal from 'reveal';
import 'reveal/index.css';
import 'reveal/theme/sky.css';

let zPresentComponent = function ($compile) {
    var reveal;
    var dir = {
        template,
        controller,
        link: function (scope, elem, attrs) {
            elem.addClass('slides');
            scope.$watch('vm.slides',function(newVal,oldVal){
                renderSlides(newVal,scope,elem);
            },true);
        },
        transclude: true,
        replace:true,
        restrict: 'E',
        controllerAs: 'vm',
        scope: {
            slides: "="
        },
        bindToController: true
    };
    return dir;


    function renderSlides(slides,scope,elem){
        elem.empty();
        for (var i = 0; i < slides.length; i++) {
            var zslide = angular.element("<z-slide><h1>"+slides[i]+"</h1></z-slide>");
            var czslide = $compile(zslide)(scope);
            elem.append(czslide);
        }
        if(!reveal){
            reveal = initializeReveal();
        }
        else{
            //that means Reveal has been initialized
            Reveal.slide( 0 );
        }

    }
    function initializeReveal() {
        Reveal.initialize({
            loop: false,
            center: true,
            transition: 'default'
        });
        return true;
    }

};


export default zPresentComponent;