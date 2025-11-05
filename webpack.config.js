const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    library: "helloWorld",
    path: path.resolve(__dirname, "./dist/hello-world"),
  },
  mode: "production",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "SidePanel.html", to: "SidePanel.html" },
        { from: "MainStage.html", to: "MainStage.html" },
      ],
    }),
  ],
};
