angular.module('mean.slides').factory("Slides", ["$location",
    function($location) {
        var _this = this;

        _this._obj = {
            currentSlide: 0,
            currentIndex: 0,
            questions: {
                "slide_3": [{
                    title: "שאלה משפחה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה משפחה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה משפחה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה משפחה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_4": [{
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_5": [{
                    title: "שאלה בטחון",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה בטחון",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה בטחון",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה בטחון",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_6": [{
                    title: "שאלה חינוך",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה חינוך",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה חינוך",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה חינוך",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_7": [{
                    title: "שאלה תעסוקה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה תעסוקה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה תעסוקה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה תעסוקה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_8": [{
                    title: "שאלה סביבה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה סביבה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה סביבה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה סביבה",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_9": [{
                    title: "שאלה משפט",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה משפט",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה משפט",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה משפט",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_10": [{
                    title: "שאלה דיור",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה דיור",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה דיור",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה דיור",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_11": [{
                    title: "שאלה בריאות",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה בריאות",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה בריאות",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה בריאות",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }],
                "slide_12": []

            },
            categoryArr: [{
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
                label: 'חינוך',
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

            moveToTop: moveToTop,
            updateCurrentSlide: updateCurrentSlide
        };

        function moveToTop(index) {

            var newSlide = _this._obj.categoryArr[index].slide;
            $location.path("/slide/" + newSlide);

            if (index != -1) {
                var obj = _this._obj.categoryArr[index];
                //Make a copy of the categoryArr with slice(0)
                var n = _this._obj.categoryArr.slice(0);
                var q = n[index];
                n.splice(index, 1);
                n.unshift(q);
                // _this._obj.categoryArr = n;
                angular.copy(n, _this._obj.categoryArr);
                updateCurrentSlide(newSlide,0);

            }

            return _this._obj;
        }

        function updateCurrentSlide(slide_id,index){
            _this._obj.currentSlide = slide_id;
            _this._obj.currentIndex = index;
        }

        return _this._obj;
    }
]);
