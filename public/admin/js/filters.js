angular.module('roham-admin.system').filter('newline', function () {
    return function(text) {
        return text.replace(/\n/g, '<br/>');
    }
});