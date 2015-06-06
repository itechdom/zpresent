import template from './zPresent.html';
import controller from './zPresent.controller.js';
import revealConnector from './reveal.connector.js';
//import data from 'slides.js'


var revealC;
var mySlides = [];

let zPresentComponent = function ($compile,$http) {
    var reveal;
    var dir = {
        template,
        controller,
        link: function (scope, elem, attrs) {
            elem.addClass('slides');
            scope.$watch('vm.slides',function(newVal,oldVal){
                //parse the markdown here and then pass it to render slide
                if(newVal) {
                    renderSlides(newVal, scope, elem);
                }
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
        for (var key in slides) {
            var html = slides[key].body;
            var zslide = angular.element("<z-slide><h1>"+html+"</h1></z-slide>");
            var czslide = $compile(zslide)(scope);
            elem.append(czslide);
        }
        if(!revealC) {
            revealC = new revealConnector();
        }
        else{
            revealC.goToSlide(0);
        }
    }

};

export default zPresentComponent;
