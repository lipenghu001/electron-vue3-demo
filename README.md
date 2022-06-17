# electron-vue3-demo

## 搭建
```
yarn install
```

### 开发环境
```
npm run electron:serve
```

### 生产环境
```
npm run electron:build
```

### 调试
1. 配置文件：见 .vscode
2. 启动方式：运行和调试->Electron:All->调试主进程(注意，首次启动后需要手动刷新才能触发断点)
3. 渲染进程调试：chrome中访问 localhost:9223 ->选择目标页面->控制台断点调试

<!-- ### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/). -->
