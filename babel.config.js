
module.exports = function(api) {
  api.cache(true);

  return {
    "env": {
      "modern": {
        "presets": [
          [ "@babel/preset-flow" ],
          [
            "@babel/preset-env", {
              "corejs": 3,
              "useBuiltIns": "entry",
              "targets": {
                "esmodules": true
                // "browsers": [
                //   'Edge >= 16',
                //   'Firefox >= 60',
                //   'Chrome >= 61',
                //   'Safari >= 11',
                //   'Opera >= 48'
                // ]
              }
            }
          ]
        ]
      },
      "legacy": {
        "presets": [
          [ "@babel/preset-flow" ],
          [
            "@babel/preset-env", {
              "corejs": 3,
              "useBuiltIns": "entry",
              "targets": {
                "browsers": [
                  'defaults'
                ]
              }
            }
          ]
        ]
      }
    }
  }
};
