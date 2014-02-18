angular.module('mean.slides').factory("Slides", ["$location", "$http",
    function($location, $http) {
        var _this = this;
        getQuestions();
        getTitles();

        _this._obj = {
            currentSlide: 0,
            currentIndex: 0,
            questions: {},
            slidesOrder: [
            {
                slide: 5,
                name: 'health',
                label: 'בריאות',
                color: 'purple',
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
                slide: 3,
                name: 'edu',
                label: 'השכלה, חינוך וכישורים',
                color: 'bright_turqioze',
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
                name: 'civ',
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
            saveAllAnswers: saveAllAnswers,
            moveToTop: moveToTop,
            updateCurrentSlide: updateCurrentSlide
        };

        function getTitles(){
            $http.get('/cms/views/types').success(function(types) {
                _this._obj.titles = {};
                types.fields.forEach(function(title){
                    _this._obj.titles[title.name] = title.label
                })
            });
        }

        function getQuestions() {
            $http.get('/cms/views').success(function(slides) {
                var newSlides = {};
                slides.forEach(function(slide){
                    var questions = slide.fields,
                        newQuestions = [];
                        questions.forEach(function(question){
                        if (["personal", "society", "other-question"].indexOf(question.type)  >-1){
                            val = question.type == "other-question" ? "" : 0;
                            newQuestions.push({
                                title: question.name,
                                body: question.label,
                                val: val,
                                type: question.type
                            });
                        }
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

        function saveAllAnswers(slides,session_id){
            sortedSlides = slides.sort(function(a, b){
                return a.id - b.id;
            });
            array = [];
            sortedSlides.forEach(function(slide){
                delete slide.id;
                array.push(slide.answers);
            });
            
            //TODO: if a user don't have to answer all the questions - we need the slideID for the next time. 
            //otherwise - we don't need it and can to save all answers in a single array.
            var data = {
                results: ([].concat.apply([], array)),
                sessionId: session_id
            };
            console.log(data);
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
