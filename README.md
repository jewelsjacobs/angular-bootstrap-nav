[![Build Status](https://travis-ci.org/rackerlabs/angular-bootstrap-nav.svg)](https://travis-ci.org/rackerlabs/angular-bootstrap-nav)

# Angular Bootstrap Nav

AngularJS (Angular) directive for Twitter's Bootstrap's Navbar component. Requires angular-ui-bootstrap and bootstrap css.
See [example plunkr](http://plnkr.co/edit/PXabcU).

# Features
 - Links created from routes
 - Optional logo markup
 - Optional search input with optional submit button or select input
 
# Install

1. Install bower:

    ```shell
    $ [sudo] npm install bower -g
    ```

2. Install bower package:

    ```shell
    $ bower install angular-bootstrap-nav
    ```

# Usage
## Add directive web component

    ```html
    <!-- Just logo -->
    <bootstrap-nav logo="<img src='somelogo.png'/>"></bootstrap-nav>
    <!-- Logo + title -->
    <bootstrap-nav logo="<img src='somelogo.png'/>" title="Some Title"></bootstrap-nav>
    <!-- Logo + title + search input with submit button -->
    <bootstrap-nav logo="<img src='somelogo.png'/>" title="Some Title" search-input="searchInputOptions" search-button="submitButtonOptions"></bootstrap-nav>
    <!-- Logo + title + search input with select -->
    <bootstrap-nav logo="<img src='somelogo.png'/>" title="Some Title" search-input="searchInputOptions" search-select="selectOptions"></bootstrap-nav>
    ```

## Adding route to menu
Add `name` property to route for link name.  Set `navitem` property to `true` to include it in the menu.

    ```javascript
    $routeProvider.
    when('/route1', {
      navitem: true,
      controller: false,
      name: 'route1',
      template: '<p>i am route 1</p>'
    })
    ```
    
## Search Input Options
Add a placeholder value to the search input.

    ```javascript
    var searchInputOptions = {
      placeholder : "Search"
    };
    ```
    
The input value in this example will be `searchInputOptions.value`.

## Select Options
Add select values, labels, and a default _*placeholder*_ value.

    ```javascript
    var selectOptions = {
      "default" : "Choose A Value",
      "options": [
        {value: 'choicevalue1', label: "choicelabel1"},
        {value: 'choicevalue2', label: "choicelabel2"}
      ]
    };
    ```
    
The selected value in this example will be `selectOptions.choice.value`.

## Submit Button Options
Add select values, labels, and a default _*placeholder*_ value.

    ```javascript
    var submitButtonOptions = {
      "placeholder" : "Search",
      "submit" : function () {
        console.log("submit button clicked")
      };
    };
    ```

# Contributing
Please view the following documentation for contributing to this project.
 - [Contribution Guide](./CONTRIBUTING.md)
 - [Changelog](./CHANGELOG.md)
