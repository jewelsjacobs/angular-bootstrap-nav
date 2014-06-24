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
    "      <div class=\"form-group\" ng-switch=\"type(searchSelect)\">\n" +
    "        <input ng-switch-when=\"select\" type=\"text\" class=\"form-control\" id=\"search\" ng-model=\"searchInput.value\" placeholder=\"{{ searchInput.placeholder }}\">\n" +
    "        <select ng-switch-when=\"select\" ng-model=\"searchSelect.choice\" class=\"form-control\" ng-options=\"option.label for option in searchSelect.options\">\n" +
    "          <option value=\"\">{{ searchSelect.default }}</option>\n" +
    "        </select>\n" +
    "        <div class=\"input-group\" style=\"max-width: 250px;\"ng-switch-when=\"button\">\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"search\" ng-model=\"searchInput.value\" placeholder=\"{{ searchInput.placeholder }}\">\n" +
    "          <span class=\"input-group-btn\">\n" +
    "            <button class=\"btn btn-default\" type=\"submit\" ng-click=\"searchButton.submit()\">{{ searchButton.placeholder || 'Search' }}</button>\n" +
    "          </span>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </form>\n" +
    "   </div>\n" +
    "</nav>\n"
  );

}]);
