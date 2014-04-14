[![Build Status](https://travis-ci.org/rackerlabs/angular-bootstrap-nav.svg)](https://travis-ci.org/rackerlabs/angular-bootstrap-nav)

# Angular Bootstrap Nav

AngularJS (Angular) directive for Twitter's Bootstrap's Navbar component. Requires angular-ui-bootstrap and bootstrap css.

Based on [angular-bootstrap-nav.html gist](https://gist.github.com/fpv83/8704263).

# Install

1. Install bower:

    ```shell
    $ [sudo] npm install bower -g
    ```

2. Install bower package:

    ```shell
    $ bower install angular-ui-bootstrap
    ```

# Build Instructions

1. `git clone git@github.com:rackerlabs/angular-bootstrap-nav.git angular-bootstrap-nav`
2. `cd angular-bootstrap-nav`
3. `sudo npm install -g lineman`
4. `npm install`
5. `lineman run`
6. open your web browser to localhost:8000

# Running Tests

For guidance on testing strategy, view [@davemo](http://www.github.com/davemo)'s [Testing Strategies for Angular JS](http://www.youtube.com/watch?v=UYVcY9EJcRs) screencast, and contains all the tests we wrote in the screencast and a few more!

To run the unit tests:

1. `lineman run` from 1 terminal window
2. `lineman spec` from another terminal window, this will launch Testem and execute specs in Chrome

To run the end-to-end tests:

1. `npm install protractor`
2. `brew install selenium-server-standalone`
3. Make sure you have chrome installed.
4. `lineman run` from 1 terminal window
5. `lineman grunt spec-e2e` from another terminal window

  Troubleshooting:

    If you see this error: Warning: there's no selenium server jar at the specified location,
    you may need to change the selenium-server-standalone jar version in config/spec-e2e.js
    to the actual you see in /usr/local/opt/selenium-server-standalone (brew users may have a libexec directory).

    If you see this error: Fatal error: The path to the driver executable must be set by the
    webdriver.chrome.driver system property, you may need to download the chromedriver
    (https://code.google.com/p/selenium/wiki/ChromeDriver) and place it in /usr/local/bin (mac).

# Contributing

Please view the following documentation for contributing to this project.

 - [Contribution Guide](./CONTRIBUTING.md)
 - [Changelog](./CHANGELOG.md)