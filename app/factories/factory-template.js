(function(){
  'use strict';
  angular.module('moduleName')
  .factory('factoryName',factoryName);

  factoryName.$inject = ['$http','ApiService','$httpParamSerializerJQLike'];

  function factoryName($http,ApiService,$httpParamSerializerJQLike){
    return {
      functionName:functionNameHere
    };

  function functionNameHere(){

    }
  }
})();
