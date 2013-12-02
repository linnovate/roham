angular.module('mean.slides').factory("Slides", ["$location", "$http",
    function($location, $http) {
        var _this = this;
        getQuestions();

        _this._obj = {
            currentSlide: 0,
            currentIndex: 0,
            questions: {},
            slidesOrder: [{
                slide: 3,
                name: 'family',
                label: 'משפחה',
                color: 'red',
                questions: []
            }, {
                slide: 4,
                name: 'eco',
                label: 'כלכלה',
                color: 'dark_green',
                questions: []
            }, {
                slide: 5,
                name: 'sec',
                label: 'בטחון',
                color: 'pink',
                questions: []
            }, {
                slide: 6,
                name: 'edu',
                label: 'השכלה',
                color: 'bright_turqioze',
                questions: []
            }, {
                slide: 7,
                name: 'emplo',
                label: 'תעסוקה',
                color: 'yellow',
                questions: []
            }, {
                slide: 8,
                name: 'envi',
                label: 'סביבה',
                color: 'bright_green',
                questions: []
            }, {
                slide: 9,
                name: 'law',
                label: 'משפט',
                color: 'orange',
                questions: []
            }, {
                slide: 10,
                name: 'dior',
                label: 'דיור',
                color: 'dark_turqioze',
                questions: []
            }, {
                slide: 11,
                name: 'health',
                label: 'בריאות',
                color: 'purple',
                questions: []
            }, {
                slide: 12,
                name: 'other',
                label: 'אחר',
                color: 'blue'
            }],
            getQuestions: getQuestions,
            saveSlideAnswers: saveSlideAnswers,
            moveToTop: moveToTop,
            updateCurrentSlide: updateCurrentSlide
        };

        function getQuestions() {
            $http.get('/cms/views').success(function(slides) {
                var newSlides = {};
                slides.forEach(function(slide){
                    var questions = slide.fields,
                        newQuestions = [];
                        questions.forEach(function(question){
                        newQuestions.push({
                            title: question.name,
                            body: question.label,
                            val: 0
                        });
                    });

                    newSlides[slide.slideId] = newQuestions;
                });
                _this._obj.questions = newSlides;
            });
        }

        function moveToTop(index) {

            var newSlide = _this._obj.slidesOrder[index].slide;
            $location.path("/slide/" + newSlide);

            if (index != -1) {
                var obj = _this._obj.slidesOrder[index];

                //Make a copy of the slidesOrder with slice(0)
                var n = _this._obj.slidesOrder.slice(0);
                var q = n[index];

                n.splice(index, 1);
                n.unshift(q);

                angular.copy(n, _this._obj.slidesOrder);

                updateCurrentSlide(newSlide, 0);
            }

            return _this._obj;
        }

        function saveSlideAnswers(slide_id,questions){
            var date = {
                slide_id: slide_id,
                questions: questions,
                session_id: Global.getSessionId()
            };

            $http.post("/submit",data).success(function(){

            });   
        }

        function updateCurrentSlide(slide_id, index) {
            _this._obj.currentSlide = slide_id;
            _this._obj.currentIndex = index;
        }

        return _this._obj;
    }
]);
