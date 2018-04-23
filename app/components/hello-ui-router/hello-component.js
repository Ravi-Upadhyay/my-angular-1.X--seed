(function(){
  'use strict'

  angular.module('myApp.helloUiRouter')
  .component('helloUiComponent', {
    templateUrl: 'components/hello-ui-router/hello-template.html',
    controller: ('helloUiController', helloUiController)
  });
  
  helloUiController.$inject = [];
  
  function helloUiController() {
  
  }
})();

