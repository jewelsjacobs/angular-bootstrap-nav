/* angular-bootstrap-nav - 0.1.15
 * 
 * https://github.com/rackerlabs/angular-bootstrap-nav
 */
(function() {
  angular.module("bootstrap.navbar", []).directive("bootstrapNav", [
    function() {
      "use strict";
      return {
        restrict: "AE",
        replace: true,
        transclude: false,
        require: ['^ui.bootstrap.typeahead', '^'],
        scope: {
          title: "@",
          logo: '=?'
        },
        controller: [
          "$scope", "$location", "$route", function($scope, $location, $route) {
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
                $scope.routes.push(routeitem);
              }
            });
            return $scope.isCollapsed = true;
          }
        ],
        templateUrl: 'angular-bootstrap-nav.html'
      };
    }
  ]);

}).call(this);

angular.module("bootstrap.navbar").run(["$templateCache", function($templateCache) {

  $templateCache.put("angular-bootstrap-nav.html",
    "<nav class=\"navbar navbar-inverse\" role=\"navigation\">\n" +
    "  <div class=\"navbar-header\">\n" +
    "    <button type=\"button\" class=\"navbar-toggle\" ng-init=\"navCollapsed = true\" ng-click=\"navCollapsed = !navCollapsed\">\n" +
    "      <span class=\"sr-only\">Toggle navigation</span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "      <span class=\"icon-bar\"></span>\n" +
    "    </button>\n" +
    "    <div ng-if=\"logo\" class=\"pull-left\" ng-bind-html=\"logo\"></div>\n" +
    "    <a id=\"Ludicbrand\" class=\"navbar-brand\" href=\"#/home\">\n" +
    "      <span class=\"thin\" ng-bind=\"title\"></span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"collapse navbar-collapse\" ng-class=\"!navCollapsed && 'in'\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li ng-repeat=\"route in routes\" data-ng-class=\"navClass('{{route.name}}')\">\n" +
    "        <a ng-href=\"#{{route.path}}\" ng-bind=\"route.name\"></a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </div>\n" +
    "</nav>\n"
  );

}]);
