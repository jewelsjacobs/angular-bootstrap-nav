describe "directive bootstrap.navbar", ->

  #elements

  beforeEach module("bootstrap.navbar")

  beforeEach inject(($compile, $controller, $rootScope, $location) ->
    @scope = $rootScope.$new()

    @location = $location

    @MockNavCtr = $controller("NavCtr",
      $scope: @scope
    )

    @onDropDownClick = ->
      2

    # mock attributes
    @scope.logo = "<h1>blah</h1>"
    @scope.title = "testtitle"
    @scope.searchOptions =
      input:
        placeholder: "Search"

      button:
        choices: [
          "choice1"
          "choice2"
        ]
        placeholder: "Search"
        choice: "choice1"
        onClick: @onDropDownClick

    @elm = $compile([
      "<bootstrap-nav logo=\"logo\" title=\"{{ title }}\""
      "search=\"searchOptions\">"
      "</bootstrap-nav>"].join("\n"))(@scope)
    @scope.$apply()
    @logoEl = @elm[0].querySelector('.logo')
    @elm
  )

  describe "route is current", ->
    it "should add class of active", ->
      @location.path "mypath"
      expect(@scope.navClass "mypath").toBe "active"
      expect(@scope.navClass "otherpath").toNotBe "active"

  describe "attribute values", ->
    titleEl = (elm) ->
      elm[0].querySelector('a.navbar-brand span')
    it "title should be the value of the title attribute", ->
      title = titleEl(@elm)
      expect(title.innerHTML).toBe "testtitle"