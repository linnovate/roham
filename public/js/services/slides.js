angular.module('mean.slides').factory("Slides", ["$location", "$http",
    function($location, $http) {
        var _this = this;
        getQuestions();

        _this._obj = {
            currentSlide: 0,
            currentIndex: 0,
            questions: {},
            slidesOrder: [
            {
                slide: 3,
                name: 'edu',
                label: 'השכלה, חינוך וכישורים',
                color: 'bright_turqioze',
                questions: []
            },
            {
                slide: 4,
                name: 'emplo',
                label: 'איכות התעסוקה',
                color: 'yellow',
                questions: []
            }, 
            {
                slide: 5,
                name: 'health',
                label: 'בריאות',
                color: 'purple',
                questions: []
            },
            {
                slide: 6,
                name: 'envi',
                label: 'סביבה',
                color: 'bright_green',
                questions: []
            }, 
            {
                slide: 7,
                name: 'family',
                label: 'רווחה אישית וחברתית',
                color: 'red',
                questions: []
            },
            {
                slide: 8,
                name: 'involv',
                label: 'מעורבות אזרחית וממשל',
                color: 'orange',
                questions: []
            }, 
            {
                slide: 9,
                name: 'dior',
                label: 'תשתיות ודיור',
                color: 'dark_turqioze',
                questions: []
            },
            {
                slide: 10,
                name: 'sec',
                label: 'ביטחון אישי',
                color: 'pink',
                questions: []
            },
            {
                slide: 11,
                name: 'eco',
                label: 'רמת חיים חומרית',
                color: 'dark_turqioze',
                questions: []
            },
            {
                slide: 12,
                name: 'other',
                label: 'אחר',
                color: 'blue',
                questions: []
            }
            ],
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

        function saveSlideAnswers(slide_id,questions,session_id){
            var data = {
                slideId: slide_id,
                answers: questions,
                sessionId: session_id
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
