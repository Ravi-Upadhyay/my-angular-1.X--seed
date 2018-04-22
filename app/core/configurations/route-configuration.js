

'use strict';

angular.module('myApp')
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {

    //Logic to remove hash logic, from the url
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

    $urlRouterProvider.otherwise('/hello');

    var hello = {
        name: 'hello',
        url: '/hello',
        template: '<hello-ui-component></hello-ui-component>'
    };

    $stateProvider.state(hello);

    });
