describe "directive bootstrapNav", ->
  beforeEach ->
    module "webapp"

  beforeEach inject(($rootScope, $compile, $location, $route) ->
    @title = "testtitle"
    @html = "<div bootstrap-nav title='" + title + "'></div>"
    $location = scope.$service('$location')
    $route = scope.$service('$route')
    $browser = scope.$service('$browser')
    @scope = $rootScope.$new()
    @elem = $compile(@html)(@scope)
  )

  describe "route is current", ->
    it "should add class of active", ->
      expect(@scope.navClass).toBe "active"