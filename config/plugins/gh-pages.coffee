module.exports = (lineman) ->
  config:
    config:
      "gh-pages":
        options:
          base: 'docs/'
        src: ['**']