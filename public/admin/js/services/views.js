//Views service used for sources REST endpoint
angular.module('roham-admin.system').factory("Views", function($resource){
	return $resource('cms/views/:slideId', {slideId:'@slideId'}, {
		update: {method: 'PUT'}, 
		query: {method: 'GET', isArray: true}
	});
});