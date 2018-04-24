/**
 * HTTP-MANAGER-SERVICE:   This will provide common mechanism or wrapper to our $http service
 * requests. Idea is to provide a generic mechanisms on how $http requests should be handled.
 * 
 * REQUEST PIPELINE: 
 * 
 * COMPONENT >> HTTP MANAGER(SERVICE) >> DATA FACTORY(FACTORY)
 */
(function(){

    angular.module('myApp.services')
    .service('httpManager',httpManager);
  
    httpManager.$inject = [];
  
    function httpManager(){
        var self = this;
        self.httpCache = {};

        self.requestXHR = function(){
            
        }
    }
  })();
  