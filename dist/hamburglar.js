angular.module("angular-hamburglar").run(["$templateCache", function($templateCache) {$templateCache.put("hamburglar.html","<div class=hamburglar ng-style=\"{ \'transform\' : \'scale(\' + scale + \')\' }\"><div class=burger-icon><div class=burger-container><span class=burger-bun-top ng-style=\"{ \'background\' : color, \'animation-duration\': speed }\"></span> <span class=burger-filling ng-style=\"{ \'background\' : color, \'animation-duration\': speed }\"></span> <span class=burger-bun-bot ng-style=\"{ \'background\' : color, \'animation-duration\': speed }\"></span></div></div></div>");}]);
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