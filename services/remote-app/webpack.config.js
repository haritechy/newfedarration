const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyPlugin = require("copy-webpack-plugin");

const deps = require("./package.json").dependencies;

module.exports = {
  entry: "./src/index",
  cache: false,

  mode: "development",
  devtool: "source-map",

  optimization: {
    minimize: false, // Keep as false for easier debugging in development
  },

  output: {
    publicPath: "http://localhost:3001/", // Ensure this matches your development server URL
    clean: true, // Cleans the output directory before each build
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"], // Allows importing without specifying extensions
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false, // Fixes issues with package imports in some module systems
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/, // Excludes node_modules for faster builds
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env", // Transpiles modern JavaScript to compatible versions
              "@babel/preset-react", // Enables React JSX transpilation
            ],
          },
        },
      },
      {
        test: /\.md$/,
        use: "raw-loader", // Allows importing Markdown files as raw text
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource", // Supports image assets
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader",],
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app1", // Name of the microfrontend
      filename: "remoteEntry.js",
      exposes: {
        "./Home": "./src/Home/Home", // Exposing the `Home` component
      },
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
      template: "./public/index.html", // Path to your HTML template
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/Assets", to: "assets" }, // Example of copying static assets
      ],
    }),
  ],

  devServer: {
    port: 3001, // Development server port
    historyApiFallback: true, // Enables SPA routing
    open: true, // Opens the browser after server starts
    hot: true, // Enables Hot Module Replacement (HMR)
  },
};
