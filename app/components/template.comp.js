(function () {
  // 'use strict';

  angular.module('moduleName')
    .component('componentName', {
      templateUrl: 'templateUrl',
      controller: ('controllerName', controllerName)
    });

  controllerName.$inject = [];

  function controllerName() {

  }

})();
