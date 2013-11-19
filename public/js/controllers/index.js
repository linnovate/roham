angular.module('mean.system').controller('IndexController', ['$scope', 'Global', '$rootScope',
    function($scope, Global, $rootScope) {
        $scope.global = Global;
        // $scoope.urllArr[{
        //     "sec.png"
        // }, {
        //     "eco.1.png"
        // }, {
        //     "fami.1.png"
        // }];

        // app.directive('backImg', function() {
        //     return function(scope, element, attrs) {
        //         attrs.$observe('backImg', function(value) {
        //             element.css({
        //                 'background-image': 'url(' + value + ')',
        //                 'background-size': 'cover'
        //             });
        //         });
        //     };
        // });

        $scope.categoryArr = [{
            slide: 3,
            menu: 'family',
            label: 'משפחה',
            icon: 'img/sidebar/family.png',
            color: 'red'
        }, {
            slide: 4,
            menu: 'eco',
            label: 'משפחה',
            icon: 'img/sidebar/eco.png',
            color: 'dark_green'
        }, {
            slide: 5,
            menu: 'sec',
            label: 'משפחה',
            icon: 'img/sidebar/sec.png',
            color: 'pink'
        }, {
            slide: 6,
            menu: 'edu',
            abel: 'משפחה',
            icon: 'img/sidebar/edu.png',
            color: 'bright_turqioze'
        }, {
            slide: 7,
            menu: 'emplo',
            label: 'משפחה',
            icon: 'img/sidebar/emplo.png',
            color: 'yellow'
        }, {
            slide: 8,
            menu: 'envi',
            label: 'משפחה',
            icon: 'img/sidebar/family.png',
            color: 'bright_green'
        }, {
            slide: 9,
            menu: 'law',
            label: 'משפחה',
            icon: 'img/sidebar/family.png',
            color: 'orange'
        }, {
            slide: 10,
            menu: 'dior',
            label: 'משפחה',
            icon: 'img/sidebar/family.png',
            color: 'dark_turqioze'
        }, {
            slide: 11,
            menu: 'healt',
            label: 'משפחה',
            icon: 'img/sidebar/family.png',
            color: 'purple'
        }, {
            slide: 12,
            menu: 'other',
            label: 'משפחה',
            icon: 'img/sidebar/family.png',
            color: 'blue'
        }, ];

        $scope.moveToTop = function(category, index) {
            console.log(category, index);
            if (index != -1) {
                var obj = $scope.categoryArr[index];
                $scope.categoryArr.splice(index, 1);
                $scope.categoryArr.splice(0, 0, obj);
                console.log($scope.categoryArr);
            }
        };

    }
]);
