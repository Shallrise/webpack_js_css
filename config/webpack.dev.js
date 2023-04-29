const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
//在 index.html 中自动引入打包后的js文件
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //入口
    entry:"./src/main.js",

    //输出
    output:{
        //path:文件输出目录，绝对路径
        //path.resolve()方法返回一个绝对路径
        //__dirname 当前文件的文件夹绝对路径
        path:undefined,//开发环境没有输出，不需要指定输出目录
        //输出的文件名
        filename:"static/js/main.js",
        // clean:true,//自动将上次打包目录资源清空
    },

    //加载器
    module:{
        rules:[
            {
                //匹配 .css 结尾的文件
                test:/\.css$/,
                // use 数组里面 Loader 执行顺序从右到左
                use:["style-loader","css-loader"],
                //css-loader:将CSS文件编译成Webpack能识别的模块
                //style-loader:动态创建一个Style标签，放置CSS模块内容
            },
            {
                test:/\.less$/,
                //less-loader:将 less 文件编译成 css 文件
                use:["style-loader","css-loader","less-loader"]
            },
            {
                //匹配所有 .sass 和 .scss 结尾文件
                test:/\.s[ac]ss$/,
                //sass-loader 将 sass 文件编译成 css文件
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.styl$/,
                //stylus-loader 将 styl 文件编译成 css 文件
                use:["style-loader","css-loader","stylus-loader"]
            },
            {
                test:/\.js$/,
                exclude:/node_modules/, //排除 node_modules代码不编译
                loader:"babel-loader",
            }
        ],
    },

    //插件
    plugins:[
        new ESLintWebpackPlugin({
            //指定 eslint 检查文件的目录
            context:path.resolve(__dirname,"../src")
        }),
        new HtmlWebpackPlugin({
            //以 public/index.html 为模板创建文件
            //新的 html 文件自动引入打包生成的 js 资源
            template:path.resolve(__dirname,"../public/index.html")
        })
    ],

    //开发服务器
    devServer:{
        host:"localhost",//启动服务器域名
        port:"3000",//启动服务器端口号
        open:true,//是否自动开启浏览器
    },

    //模式
    mode:"development",//开发模式
}