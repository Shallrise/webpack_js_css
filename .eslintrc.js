module.exports = {
    //解析选项
    parserOptions:{
        ecmaVersion:6,//ES 语法版本
        sourceType:"module",// ES 模块化
    },
    //具体检查规则
    rules:{
        "no-var":2 //不能使用 var 定义变量
    },
    //继承规则
    extends:["eslint:recommended"], //继承 Eslint 规则
    env:{
        node:true,//启用 node 中全局变量
        browser:true,//启用浏览器中全局变量
    }
}