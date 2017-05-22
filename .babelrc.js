module.exports = {
  // "env": {
  //   "test": {
  //     "sourceMap": "inline",
  //     "plugins": [ "istanbul" ],
  //   }
  // },
  "plugins": [
    "transform-decorators",
    "transform-class-properties"
  ],
  "presets": [
    [
      "env", {
        "targets": process.env.BABEL_TARGET === 'node' ? {
          "node": process.env.IN_PROTRACTOR ? '6' : 'current'
        } : {
          "browsers": [
            "last 3 versions",
            "not ie <= 8"
          ],
          "uglify": process.env.NODE_ENV === 'production',
        },
        "loose": true,
        "modules": process.env.BABEL_TARGET === 'node' ? 'commonjs' : false,
        // "whitelist": [
        //   "transform-es2015-literals",
        //   "transform-es2015-template-literals"
        // ],
        "useBuiltIns": 'entry'
      }
    ]
  ]


}
