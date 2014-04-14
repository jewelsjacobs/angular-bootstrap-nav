#global module:false

# Note: this Gruntfile is only for lineman's internal development
#  and, unlike almost everything else to do with Grunt, is not intended
#  for use by people's Lineman projects.
#
# Running internal grunt commands requires the --gruntfile option
#
#   $ grunt release --no-write --gruntfile Gruntfile.internal.coffee

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-release"
  grunt.loadNpmTasks "grunt-conventional-changelog"

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    pkgFile: 'package.json'
    changelog:
      options:
        dest: "CHANGELOG.md"
        versionFile: "bower.json"

    release:
      options:
        commitMessage: "<%= version %>"
        tagName: "v<%= version %>"
        npm: false, # don't register to npm, only bower
        bump: true # we have our own bump
        file: "bower.json"

    stage:
      options:
        files: ["CHANGELOG.md"]

  grunt.registerTask "release", [
    "changelog"
    "release"
  ]

