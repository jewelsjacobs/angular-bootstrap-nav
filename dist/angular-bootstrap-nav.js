/* angular-bootstrap-nav - 0.1.14
 * 
 * 
 */
(function() {
  var NavCtr;

  angular.module("bootstrap.navbar", ['ngRoute', 'ngSanitize']).controller('NavCtr', [
    "$scope", "$location", "$route", NavCtr = function($scope, $location, $route) {
      $scope.navClass = function(page) {
        var currentRoute;
        currentRoute = $location.path().substring(1).split("/")[0];
        if (page === currentRoute) {
          return "active";
        } else {
          return "";
        }
      };
      $scope.routes = [];
      angular.forEach($route.routes, function(value, key) {
        var routeitem;
        if (value.navitem) {
          routeitem = {};
          routeitem.path = value.originalPath;
          routeitem.name = value.name;
          routeitem.templateUrl = value.templateUrl;
          routeitem.controller = value.controller;
          return $scope.routes.push(routeitem);
        }
      });
      return $scope.isCollapsed = true;
    }
  ]).directive("bootstrapNav", function() {
    "use strict";
    return {
      restrict: "AE",
      replace: true,
      transclude: false,
      scope: {
        'title': "@",
        'logo': '=?',
        'search': '=?'
      },
      controller: 'NavCtr',
      templateUrl: 'angular-bootstrap-nav.html'
    };
  });

}).call(this);
