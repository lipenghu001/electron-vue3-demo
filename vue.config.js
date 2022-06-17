module.exports = { //多页面打包
  pages: {
    main: {
      // 入口js
      entry: 'src/modules/main/main.js',
      // 模板来源
      template: 'public/main.html',
      // 在 dist 中生成的html文件名字
      filename: 'main.html',
      // template html 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Main Page'
    },
    remind: {
      entry: 'src/modules/remind/remind.js',
      template: 'public/remind.html',
      filename: 'remind.html',
      title: 'Remind Page'
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}
