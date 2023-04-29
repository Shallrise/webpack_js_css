## 基础配置

1. 开发模式和生产模式
   - 开发模式：代码能编译自动化运行，编译 ES Module 语法
   - 生产模式：代码编译优化输出，编译 ES Module 语法，压缩js
2. 配置文件
   - entry
   - output
   - loader
   - plugins
   - mode
   - devServer
3. 脚本指令
   - `webpack` 直接打包输出
   - `webpack serve` 启动开发服务器，内存编译打包没有输出
   - 配置 `npm run dev` 及 `npm run build`

## 使用的API及插件

### 提升开发体验

- 使用 `Source Map` 让开发或上线时代码报错能有更加准确的错误提示。

### 提升 webpack 提升打包构建速度

- 使用 `HotModuleReplacement` 让开发时只重新编译打包更新变化了的代码，不变的代码使用缓存，从而使更新速度更快。
- 使用 `OneOf` 让资源文件一旦被某个 loader 处理了，就不会继续遍历了，打包速度更快。
- 使用 `Include/Exclude` 排除或只检测某些文件，处理的文件更少，速度更快。
- 使用 `Cache` 对 eslint 和 babel 处理的结果进行缓存，让第二次打包速度更快。
- 使用 `Thead` 多进程处理 eslint 和 babel 任务，速度更快。（需要注意的是，进程启动通信都有开销的，要在比较多代码处理时使用才有效果）

### 减少代码体积

- 使用 `Tree Shaking` 剔除了没有使用的多余代码，让代码体积更小。
- 使用 `@babel/plugin-transform-runtime` 插件对 babel 进行处理，让辅助代码从中引入，而不是每个文件都生成辅助代码，从而体积更小。