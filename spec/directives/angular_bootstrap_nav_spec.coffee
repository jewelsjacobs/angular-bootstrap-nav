describe "directive bootstrap.navbar", ->

  beforeEach module("bootstrap.navbar")

  beforeEach inject(($compile, $controller, $rootScope, $location) ->
    @scope = $rootScope.$new()

    @location = $location

    @MockNavCtr = $controller("NavCtr",
      $scope: @scope
    )

    @choices = []

    choicesEls = (elm) ->
      elm[0].querySelectorAll('.dropdown-menu li')

    # mock attributes
    @onDropDownClick = ->
      2

    @scope.logo = "<h1>blah</h1>"
    @scope.title = "testtitle"
    @scope.searchOptions =
      input:
        placeholder: "Search"
        value: ""

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

    # global elements
    @buttonInputEl = (elm) ->
      elm[0].querySelector('.btn-primary')
    @dropdownEl = (elm) ->
      elm[0].querySelector('.dropdown-menu')
    @searchInputEl = (elm) ->
      elm[0].querySelector('#search')

    angular.forEach(choicesEls(@elm), (choice) ->
      @.push choice.querySelector('a')
    , @choices)

    @elm
  )

  describe "route is current", ->
    it "should add class of active", ->
      @location.path "mypath"
      expect(@scope.navClass "mypath").toBe "active"
      expect(@scope.navClass "otherpath").toNotBe "active"

  describe "elements", ->
    #elements
    titleEl = (elm) ->
      elm[0].querySelector('a.navbar-brand span')
    logoEl = (elm) ->
      elm[0].querySelector('.logo')

    it "should show the title", ->
      title = titleEl(@elm)
      expect(title.innerHTML).toBe "testtitle"

    it "should show the logo", ->
      logo = logoEl(@elm)
      expect(logo.innerHTML).toBe "<h1>blah</h1>"

    it "should show the input placeholder", ->
      searchInput = @searchInputEl(@elm)
      expect(searchInput.getAttribute("placeholder")).toBe "Search"

    it "should show the button placeholder", ->
      button = @buttonInputEl(@elm)
      expect(button.innerHTML).toContain "Search"

    it "should show the choices", ->
      button = @buttonInputEl(@elm)

      button.click()

      expect(@choices.length).toBe 2
      expect(@choices[0].text.trim()).toBe 'choice1'
      expect(@choices[1].text.trim()).toBe 'choice2'

  describe "dropdown", ->
    it "should update the choice property when choice is clicked", ->
      #default choice
      expect(@scope.searchOptions.button.choice).toBe 'choice1'

      @choices[1].click()
      expect(@scope.searchOptions.button.choice).toBe 'choice2'

      @choices[0].click()
      expect(@scope.searchOptions.button.choice).toBe 'choice1'

      @choices[1].click()
      expect(@scope.searchOptions.button.choice).toBe 'choice2'

#  describe "search input", ->
#    it "should update the input value property when value is entered", ->
#      searchInput = @searchInputEl(@elm)
#      searchInput.value = 'blah'
#      console.log searchInput.value
#      expect(@scope.searchOptions.input.value).toBe 'blah'
#      expect(@scope.searchOptions.input.value).toNotBe 'notBlah'
#
#      searchInput.value = 'hey'
#      expect(@scope.searchOptions.input.value).toBe 'hey'


