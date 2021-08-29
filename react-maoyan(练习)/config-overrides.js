 const {
    override, 
    fixBabelImports, 
    addWebpackResolve,
    addPostcssPlugins,
    addWebpackAlias,
    addDecoratorsLegacy 
  } = require('customize-cra');

  const path = require('path'); 

 module.exports = override(
   // 允许我们按需引入加载
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
   //后缀名配置
   addWebpackResolve({
      extensions: ['.js', '.json', '.jsx'],
    }),
   // 移动端适配
    addPostcssPlugins([require("postcss-px2rem")({ remUnit: 37.5 })]),
    // 别名配置
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src/'),
      'as': path.resolve(__dirname, 'src/assets/')
    }),
   // 装饰器
    addDecoratorsLegacy()
 );