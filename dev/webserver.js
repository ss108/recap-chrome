//github.com/samuelsimoes/chrome-extension-webpack-boilerplate
https: var WebpackDevServer = require('webpack-dev-server'),
  webpack = require('webpack'),
  config = require('../webpack.config'),
  env = require('./env.js'),
  path = require('path'),
  CopyWebpackPlugin = require('copy-webpack-plugin');

// Webpack uses this path to fetch the manifest + hot update chunks.
// Not setting it for content scripts or scripts injected into client
// pages causes webpack to fetch from a relative path.

config.output.publicPath = `https://localhost:${env.PORT}/`;

// Replace the manifest transformer so the new content security policy allows
// the public path.

var copyPluginIndex = config.plugins.findIndex(
  (plugin) => plugin instanceof CopyWebpackPlugin
);
if (copyPluginIndex !== -1) {
  config.plugins[copyPluginIndex] = new CopyWebpackPlugin({
    patterns: [
      {
        from: 'src/manifest.json',
        transform: function (content) {
          var manifest = JSON.parse(content.toString());
          var content_security_policy =
            (manifest.content_security_policy
              ? manifest.content_security_policy + '; '
              : '') +
            `script-src 'self' ${config.output.publicPath}; object-src 'self'`;

          // generates the manifest file using the package.json informations
          return Buffer.from(
            JSON.stringify(
              {
                description: process.env.npm_package_description,
                version: process.env.npm_package_version,
                ...manifest,
                content_security_policy,
              },
              null,
              2
            )
          );
        },
      },
    ],
  });
}

const compiler = webpack(config);

var server = new WebpackDevServer(compiler, {
  contentBase: path.join(__dirname, '../build'),
  disableHostCheck: true,
  headers: { 'Access-Control-Allow-Origin': '*' },
  hot: true,
  sockPort: env.PORT,
  // enable https and assign certifictes for dev
  https: true,
  cert: path.join(__dirname, './localhost.pem'),
  key: path.join(__dirname, './localhost-key.pem'),
  stats: 'minimal',
});
server.listen(env.PORT);
