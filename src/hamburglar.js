'use strict';
angular.module('angular-hamburglar', [])
  .directive('hamburglar', function () {
    return {
      restrict: 'E',
      scope: {
        color: '=',
        speed: '=',
        scale: '='
      },
      templateUrl: 'hamburglar.html',
      link: function (scope) {
        scope.color = scope.color || '#ffffff';
        scope.speed = scope.speed || '.5s';
        scope.scale = scope.scale || 1;
      }
    };
  });