angular.module('mean.system').factory("Global", ['storage', '$http',
    function(storage, $http) {
        var _this = this;
        

        function getSessionId(cb) {
            var session = storage.get('survey-session');
            if (session === null) {
                $http.get('/session').success(function(data) {
                    storage.set('survey-session', data.sessionId);
                    _this._data.session_id = data.sessionId;
                    cb(data.sessionId);
                });
            } else {
                _this._data.session_id = session; 
                cb(session);
            }
        }

        _this._data = {
            session_id: 0,
            user: window.user,
            authenticated: !! window.user,
            getSessionId: getSessionId
        };

        getSessionId(function(){});

        return _this._data;
    }
]);
