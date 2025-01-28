const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false, // Disable minimization for easier debugging
  },

  output: {
    publicPath: "http://localhost:3002/", // Update to match your dev server
    clean: true, // Cleans output directory before build
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"], // Allows importing files without extensions
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false, // Fixes some module resolution issues
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // Excludes node_modules for faster builds
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // Transpiles ES6+ syntax
              "@babel/preset-react", // Enables JSX transformation
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/, // Supports image files
        type: "asset/resource",
      },
      {
        test: /\.css$/, // Supports CSS files
        use: ['style-loader', 'css-loader']
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app2", // Name of the microfrontend
      filename: "remoteEntry.js", // Entry point for remote module
      remotes: {
        app1: "app1@http://localhost:3001/remoteEntry.js", // Remote microfrontend
        app2: "app2@http://localhost:3002/remoteEntry.js", // Remote microfrontend
      },
      exposes: {}, // No modules are exposed in this configuration
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Your HTML template file
      chunks: ["main"], // Only include the "main" chunk
    }),
  ],

  devServer: {
    port: 3002, // Port for the development server
    historyApiFallback: true, // Enables SPA routing
    open: true, // Automatically opens the app in the browser
    hot: true, // Enables Hot Module Replacement
  },
};
