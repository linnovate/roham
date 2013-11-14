angular.module('mean.slides').factory("Slides", [function() {
    var _this = this;

    _this._data = {
        currentSlide: 0
    };

    return _this._data;
}]);