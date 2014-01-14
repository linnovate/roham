//Views service used for sources REST endpoint
angular.module('roham-admin.system').factory("Results", function($resource){
	return $resource('results', {
		// update: {method: 'PUT'}, 
		query: {method: 'GET', isArray: true}
	});
});

