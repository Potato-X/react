const { override, addPostcssPlugins,addWebpackAlias } = require("customize-cra");
const path = require('path')
module.exports = override(
  addPostcssPlugins([require("postcss-px2rem")({ remUnit: 375 / 10 })]),
  addWebpackAlias({ //路径别名
    '@': path.join(__dirname, 'src'),
  })
);
