module.exports = (lineman) ->
  config:
    coffeelint:
      app: [
        "app/js/**/*.coffee"
        "config/**/*.coffee"
        "tasks/**/*.coffee"
        "spec/**/*.coffee"
        "spec-e2e/**/*.coffee"
      ]