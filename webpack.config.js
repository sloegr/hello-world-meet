const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./main.js",
  output: {
    library: "helloWorld",
  },
  mode: "development",
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "SidePanel.html", to: "SidePanel.html" },
        { from: "MainStage.html", to: "MainStage.html" },
      ],
    }),
  ],
};
