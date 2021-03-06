var path = require("path");

var Interlock = require("regiment");
var ExamplePlugin = require("../plugin");

var ilk = new Interlock({
  namespace: require("./package.json").name,
  root: __dirname,
  outputPath: path.join(__dirname, "dist"),

  bundle: [{
    entry: true,
    src: "./app/entry-a.js",
    dest: "entry-a.bundle.js"
  }, {
    entry: true,
    src: "./app/entry-b.js",
    dest: "entry-b.bundle.js"
  }, {
    entry: false,
    src: "./app/shared/lib-a.js",
    dest: "[setHash].js"
  }],

  implicitBundleDest: "[setHash].js",

  plugins: [
    new ExamplePlugin()
  ]
});

ilk.build();
