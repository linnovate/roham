window.app = angular.module('mean', [
	'ngCookies', 
	'ngResource', 
	'ngAnimate',
	'ui.bootstrap', 
	'ui.slider',
	'ngRoute', 
	'mean.system', 
	'mean.articles', 
	'mean.slides',
	'angularLocalStorage', 'ngSanitize']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.slides', []);