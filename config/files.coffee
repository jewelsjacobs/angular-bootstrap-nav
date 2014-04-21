# Exports a function which returns an object that overrides the default &
# *   plugin file patterns (used widely through the app configuration)
# *
# * To see the default definitions for Lineman's file paths and globs, see:
# *
# *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
#
module.exports = (lineman) ->

  #Override file patterns here
  ngtemplates:
    dest: 'app/js/templates.js'

  js:
    specHelpers: [
      # bower app dependencies
      "bower_components/angular/angular.js"
      "bower_components/angular-route/angular-route.js"
      "bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.js"
      # app code
      "generated/js/app.js"
    ]