describe "directive bootstrap.navbar", ->

  beforeEach module("bootstrap.navbar")

  beforeEach inject(($compile, $controller, $rootScope, $location) ->
    @scope = $rootScope.$new()

    @location = $location

    @MockNavCtr = $controller("NavCtr",
      $scope: @scope
    )

    @choices = []

    # mock attributes
    @scope.logo = "<h1>blah</h1>"
    @scope.title = "testtitle"
    @scope.searchInput = { placeholder : "Search" }
    @scope.searchSelect =
      "default" : "Search"
      "options" : ["choice1", "choice2"]

    @elm = $compile([
      "<bootstrap-nav logo=\"logo\" title=\"{{ title }}\""
      "search-input=\"searchInput\" search-select=\"searchSelect\">"
      "</bootstrap-nav>"].join("\n"))(@scope)

    # global elements
    @selectEl = (elm) ->
      elm[0].querySelector('select')
    @searchInputEl = (elm) ->
      elm[0].querySelector('#search')
    @scope.$apply()

    @elm
  )

#  describe "route is current", ->
#    it "should add class of active", ->
#      @location.path "mypath"
#      expect(@scope.navClass "mypath").toBe "active"
#      expect(@scope.navClass "otherpath").toNotBe "active"
#
#  describe "elements", ->
#    #elements
#    titleEl = (elm) ->
#      elm[0].querySelector('a.navbar-brand span')
#    logoEl = (elm) ->
#      elm[0].querySelector('.logo')
#    defaultOptionEls = (elm) ->
#      elm[0].querySelectorAll('option')[0]
#
#    it "should show the title", ->
#      title = titleEl(@elm)
#      expect(title.innerHTML).toBe "testtitle"
#
#    it "should show the logo", ->
#      logo = logoEl(@elm)
#      expect(logo.innerHTML).toBe "<h1>blah</h1>"
#
#    it "should show the input placeholder", ->
#      searchInput = @searchInputEl(@elm)
#      expect(searchInput.getAttribute("placeholder")).toBe "Search"
#
#    it "should show the default option", ->
#      option = defaultOptionEls(@elm)
#      expect(option.innerHTML).toContain "Search"
#
#    it "should show the choices", ->
#      button = @buttonInputEl(@elm)
#
#      button.click()
#
#      expect(@choices.length).toBe 2
#      expect(@choices[0].text.trim()).toBe 'choice1'
#      expect(@choices[1].text.trim()).toBe 'choice2'
#
#  describe "select", ->
#    it "should update the value property when an option is clicked", ->
#      selectEls = (elm) ->
#        elm[0].querySelector('select')
#
#      selectedIndex =
#
#      selectEls(elm).onUrlChange
#
#      #default choice
#      expect(@scope.searchSelect.value).toBe 'choice1'
#
#      clickElement @choices[1]
#      expect(@scope.searchSelect.value).toBe 'choice2'
#
#      clickElement @choices[0]
#      expect(@scope.searchSelect.value).toBe 'choice1'
#
#      clickElement @choices[1]
#      expect(@scope.searchSelect.value).toBe 'choice2'
#
#
#  describe "search function", ->
#    it "should execute when dropdown choice is clicked", ->
#      clickElement @choices[1]
#      expect(@scope.searchOptions.button.onClick()).toBe 2


