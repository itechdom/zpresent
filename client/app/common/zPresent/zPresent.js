import angular from 'angular';
import zPresentComponent from './zPresent.component.js';
import zSlideComponent from './zSlide/zSlide.component.js';


let zPresentModule = angular.module('zPresent', [
])
.directive('zPresent', zPresentComponent)
.directive('zSlide', zSlideComponent);

export default zPresentModule;