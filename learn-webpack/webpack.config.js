const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: './index.js',
    analytics: './analytics.js'
  },
  output: {
    filename: "[name][contenthash].js",
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Timofeev webpack",
      template: "./index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: "img", to: "img" },
      ],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS

          {
            loader: "sass-loader",
            options: {
              additionalData: async (content, loaderContext) => {
                // More information about available properties https://webpack.js.org/api/loaders/
                const { resourcePath, rootContext } = loaderContext;
                const relativePath = path.relative(rootContext, resourcePath);

                if (relativePath === "styles/foo.scss") {
                  return "$value: 100px;" + content;
                }

                return "$value: 200px;" + content;
              },
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ],
  },
};