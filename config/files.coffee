# Exports a function which returns an object that overrides the default &
# *   plugin file patterns (used widely through the app configuration)
# *
# * To see the default definitions for Lineman's file paths and globs, see:
# *
# *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
#
module.exports = (lineman) ->

  #Override file patterns here
  js:
    specHelpers: [
      # bower app dependencies
      "vendor/bower/angular/angular.js"
      "vendor/bower/angular-route/angular-route.js"
      "vendor/bower/angular-sanitize/angular-sanitize.js"
      "vendor/bower/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js"
      "vendor/bower/jasmine-jquery/lib/jasmine-jquery.js"
      "spec/helpers/**/*.js"
      # app code
      "generated/js/app.js"
      # spec-helpers
      "generated/js/spec-helpers.coffee.js"
    ]