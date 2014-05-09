angular.module("bootstrap.navbar", []).directive "bootstrapNav", [->
  "use strict"
  restrict: "AE"
  replace: true
  transclude: false
  require: ['^ui.bootstrap.typeahead', '^']
  scope:
    title: "@"
    logo: '=?'

  controller: [
    "$scope"
    "$location"
    "$route"
    ($scope, $location, $route) ->
      $scope.navClass = (page) ->
        currentRoute = $location.path().substring(1).split("/")[0]
        (if page is currentRoute then "active" else "")

      $scope.routes = []
      angular.forEach $route.routes, (value, key) ->
        if value.navitem
          routeitem = {}
          routeitem.path = value.originalPath
          routeitem.name = value.name
          routeitem.templateUrl = value.templateUrl
          routeitem.controller = value.controller
          $scope.routes.push routeitem
        return

      $scope.isCollapsed = true
  ]
  templateUrl: 'angular-bootstrap-nav.html'
]