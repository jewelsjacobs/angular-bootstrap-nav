/* angular-bootstrap-nav - 0.1.23
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
      angular.forEach($route.routes, function(value) {
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
        'searchInput': '=?',
        'searchSelect': '=?'
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
    "    <form ng-if=\"searchInput\" class=\"navbar-form navbar-right\" role=\"search\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <input id=\"search\" type=\"text\" class=\"form-control\" ng-model=\"searchInput.value\" placeholder=\"{{ searchInput.placeholder }}\">\n" +
    "        <!-- Select -->\n" +
    "        <select ng-if=\"searchSelect\" ng-model=\"searchSelect.choice\" class=\"form-control\" ng-options=\"option.label for option in searchSelect.options\">\n" +
    "          <option value=\"\">{{ searchSelect.default }}</option>\n" +
    "        </select>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "   </div>\n" +
    "</nav>\n"
  );

}]);
