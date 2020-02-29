module.exports = {
  // 开发环境-配置方式1
  "devServer":{
    //"port": 9090,
    "proxy": {
      '/api': {
          "target": "http://10.0.75.1:8900",
          "pathRewrite": {
              // '^/api': '',
              '^/api': '_api',// 配合本地 tm mock 命令配置
          },
          "changeOrigin": true // target是域名的话，需要这个参数，
          // "secure": false,  // 使用的是https，会有安全校验，所以设置secure为false
      }
    },
  },
  // 开发环境-配置方式2
  // "buildConfig":{
  //   // 开发环境
  //   "dev":{
  //     // webpack 内的键名 必须 和webpack 原始 api 配置参数要求一致否则会报错
  //     "webpack":{
  //       // webpack-server-dev 配置
  //       "devServer":{
  //         // "port": 9090,
  //         "proxy": {
  //           '/api': {
  //               "target": 'http://10.0.75.1:8900',
  //               "pathRewrite": {
  //                   // '^/api': ''
  //                 '^/api': '_api',// 配合本地 tm mock 命令配置
  //               },
  //               "changeOrigin": true // target是域名的话，需要这个参数，
  //               // "secure": false,          // 使用的是https，会有安全校验，所以设置secure为false
  //           }
  //         },
  //       }
  //     }
  //   },
  // }
};
