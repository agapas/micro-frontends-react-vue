const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/host/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host_react",
      remotes: {
        rr: `remote_react@${domain}/rr/latest/remoteEntry.js`,
        rv: `remote_vue@${domain}/rv/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
