angular.module "webapp", [
  "bootstrap.navbar"
  "ngRoute"
  "ui.bootstrap"
]
angular.module("webapp").config [
  "$routeProvider"
  ($routeProvider) ->
    "use strict"
    $routeProvider.when("/route1",
      navitem: true
      controller: false
      name: "route1"
      template: "<p>i am route 1</p>"
    ).when("/route2",
      navitem: true
      controller: false
      name: "route2"
      template: "<p>i am route 2</p>"
    ).when("/route3",
      navitem: true
      controller: false
      name: "route3"
      template: "<p>i am route 3</p>"
    ).when("/route4",
      template: "<p>i am route 4 and not in the navbar</p>"
    ).otherwise redirectTo: "/home"
]