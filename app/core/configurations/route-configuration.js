/**
 * ROUTING-CONFIGURATION:
 * 
 * -- This file will configure routing
 * -- We are using ui-router, state based routing
 * -- TODO: Here write one example where we pass parameters with $state.go()
 */
(function(){
    'use strict';

    angular.module('myApp')
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider) {
    
    //TODO:to remove '#' from url this is the logic, But having problem when we direct
    //hit or refresh URL. 

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
})();
``