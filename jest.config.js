
module.exports = {
  verbose: true,
  transform: {
    "\\.js$": require.resolve('babel-jest'),
    "\\.jsx$": require.resolve('babel-jest'),
  },
};
