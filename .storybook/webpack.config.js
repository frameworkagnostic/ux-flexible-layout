
module.exports = (baseConfig,) => {
  baseConfig.module.rules.push({
    test: /\.css$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          modules: true,
          localIdentName: '[path][name]__[local]--[hash:base64:5]',
        }
      }
    ]
  });

  baseConfig.module.rules.push({
    test: /\.(jpg|png)$/,
    use: {
      loader: "file-loader",
      options: {
        name: "[path][name].[hash].[ext]",
      },
    },
  });

  return baseConfig;
};
