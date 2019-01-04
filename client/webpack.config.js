var webpack = require('webpack')
module.exports = {
    //页面入口文件配置
    entry: {
        'view/main/index': './js/view/main/index.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname + '/output/js',
        filename:'[name].bundle.js'
    },
    module:{
        //加载器配置
        loaders:[
            {
               
            }
        ]
    }
}