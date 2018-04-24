/**
 * DATA-SERVICE: This is generic service to maintain state of data this service will maintain
 * state of data which our application will needs. It will provide methods to 
 * 1. Set Data
 * 2. Get Data
 */
(function(){

    angular.module('myApp.services')
    .service('dataService',dataService);
  
    dataService.$inject = [];
  
    function dataService(){
      var self = this;
  
    }
  })();
  