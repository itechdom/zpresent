import angular from 'angular';
import zPresentContainer from './zPresentContainer/zPresentContainer.directive';

let commonModule = angular.module('app.common', [
	zPresentContainer.name
]);

export default commonModule;