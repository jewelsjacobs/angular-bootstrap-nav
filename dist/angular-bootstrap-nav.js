/* angular-bootstrap-nav - 0.1.14
 * 
 * 
 */
(function() {
  angular.module("bootstrap.navbar", []).directive("bootstrapNav", [
    function() {
      "use strict";
      return {
        restrict: "AE",
        replace: true,
        transclude: false,
        scope: {
          title: "@",
          logo: '=?',
          search: '=?'
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
            $scope.isCollapsed = true;
            console.log($scope);
            return $scope;
          }
        ],
        templateUrl: 'angular-bootstrap-nav.html'
      };
    }
  ]);

}).call(this);

angular.module("bootstrap.navbar").run(["$templateCache", function($templateCache) {

  $templateCache.put("angular-bootstrap-nav.html",
    "<nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n" +
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
    "    <form ng-if=\"search\" class=\"navbar-form navbar-left\" role=\"search\">\n" +
    "      <div ng-if=\"search\" class=\"form-group navbar-left\">\n" +
    "        <input type=\"text\" ng-model=\"selected\" placeholder=\"{{ search.placeholder }}\" typeahead=\"{{ search.typeahead }}\" typeahead-template-url=\"{{ search.template }}\" class=\"form-control\">\n" +
    "        <!-- Single button -->\n" +
    "        <div class=\"btn-group\" dropdown>\n" +
    "          <button type=\"button\" class=\"btn btn-primary dropdown-toggle\">\n" +
    "            {{ search.placeholder }} <span class=\"caret\"></span>\n" +
    "          </button>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li ng-repeat=\"choice in search.button.choices\">\n" +
    "              <a ng-click=\"current = choice\">\n" +
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
