/* angular-bootstrap-nav - 0.1.18
 * 
 * https://github.com/rackerlabs/angular-bootstrap-nav
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
        'title': "@?",
        'logo': '=?',
        'search': '=?'
      },
      controller: 'NavCtr',
      templateUrl: 'angular-bootstrap-nav.html'
    };
  });

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
    "    <div ng-if=\"logo\" class=\"logo pull-left\" ng-bind-html=\"logo\"></div>\n" +
    "    <a id=\"Ludicbrand\" class=\"navbar-brand\" href=\"/\">\n" +
    "      <span class=\"thin\" ng-bind=\"title\"></span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "  <div class=\"collapse navbar-collapse\" ng-class=\"!navCollapsed && 'in'\">\n" +
    "    <ul class=\"nav navbar-nav\">\n" +
    "      <li ng-repeat=\"route in routes\" data-ng-class=\"navClass('{{route.name}}')\">\n" +
    "        <a ng-href=\"#{{route.path}}\" ng-bind=\"route.name\"></a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "    <form ng-if=\"search\" class=\"navbar-form navbar-left\" role=\"search\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input id=\"search\" type=\"text\" class=\"form-control\" ng-model=\"search.input.value\" placeholder=\"{{ search.input.placeholder }}\">\n" +
    "                <!-- Single button -->\n" +
    "        <div class=\"btn-group\" dropdown>\n" +
    "          <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n" +
    "            {{ search.button.placeholder }} <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li ng-repeat=\"choice in search.button.choices\">\n" +
    "              <a style=\"cursor: pointer;\" ng-click=\"search.button.choice = choice; search.button.onClick()\">\n" +
    "                {{ choice }}\n" +
    "              </a>\n" +
    "            </li>\n" +
    "          </ul>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "   </div>\n" +
    "</nav>\n"
  );

}]);
