angular.module('mean.system').factory("Global", ['storage', '$http',
    function(storage, $http) {
        var _this = this;



        function getSessionId(cb) {
            var session = storage.get('survey-session');
            if (session === null) {
                $http.get('/session').success(function(data) {
                    storage.set('survey-session', data.sessionId);
                    cb(data.sessionId);
                });
            } else {
                cb(session);
            }
        }

        _this._data = {
            user: window.user,
            authenticated: !! window.user,
            getSessionId: getSessionId
        };

        return _this._data;
    }
]);
