angular.module('mean.slides').factory("Slides", [ "$location",
    function($location) {
        var _this = this;

        _this._obj = {
            currentSlide: 0,
            categoryArr: [{
                slide: 3,
                name: 'family',
                label: 'משפחה',
                color: 'red',
                questions: [{
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }, {
                    title: "שאלה כלכלית",
                    body: "שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. שאלה שמתארת נושא מסויים שקשור לכלכה, עם פסיקים, נקודות. ",
                    val: 4
                }]
            }, {
                slide: 4,
                name: 'eco',
                label: 'כלכלה',
                color: 'dark_green'
            }, {
                slide: 5,
                name: 'sec',
                label: 'בטחון',
                color: 'pink'
            }, {
                slide: 6,
                name: 'edu',
                label: 'חינוך',
                color: 'bright_turqioze'
            }, {
                slide: 7,
                name: 'emplo',
                label: 'תעסוקה',
                color: 'yellow'
            }, {
                slide: 8,
                name: 'envi',
                label: 'סביבה',
                color: 'bright_green'
            }, {
                slide: 9,
                name: 'law',
                label: 'משפט',
                color: 'orange'
            }, {
                slide: 10,
                name: 'dior',
                label: 'דיור',
                color: 'dark_turqioze'
            }, {
                slide: 11,
                name: 'healt',
                label: 'בריאות',
                color: 'purple'
            }, {
                slide: 12,
                name: 'other',
                label: 'אחר',
                color: 'blue'
            }],

            moveToTop: moveToTop
        };

        function moveToTop(index) {
            console.log(index);
            var newSlide = index + 3;
            $location.path("/slide/" + newSlide);
            
            if (index != -1) {
                var obj = _this._obj.categoryArr[index];
                _this._obj.categoryArr.splice(index, 1);
                _this._obj.categoryArr.splice(0,0,obj);
            }
        }

        return _this._obj;
    }
]);
