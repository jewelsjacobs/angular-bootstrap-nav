module.exports = (lineman) ->
  config:
    config:
      "gh-pages":
        options:
          base: 'docs/'
          add: true
        src: ['**']