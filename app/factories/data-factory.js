/**
 * DATA-FACTORY: This will actually calls $http service and provide us data
 * TODO: Pipeline data-flow with http-manager
 */
(function(){

    'use strict';
    
    angular.module('myApp.factories')
    .factory('dataFactory',dataFactory);
  
    dataFactory.$inject = ['$http','ApiService','$httpParamSerializerJQLike'];
  
    function dataFactory($http,ApiService,$httpParamSerializerJQLike){
      return {
        functionName:functionNameHere
      };
  
    function functionNameHere(){
  
      }
    }
  })();
  