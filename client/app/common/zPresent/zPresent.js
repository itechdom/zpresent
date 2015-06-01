import angular from 'angular';
import zPresentComponent from './zPresent.component.js';

let zPresentModule = angular.module('zPresent', [
])
.directive('zPresent', zPresentComponent);

export default zPresentModule;