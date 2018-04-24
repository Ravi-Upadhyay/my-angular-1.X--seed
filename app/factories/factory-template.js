(function(){
  'use strict';
  angular.module('moduleName')
  .factory('factoryName',factoryName);

  factoryName.$inject = ['$http','$httpParamSerializerJQLike'];

  function factoryName($http,$httpParamSerializerJQLike){
    return {
      functionName:functionNameHere
    };

  function functionNameHere(){

    }
  }
})();
