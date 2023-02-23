# hj-erd 在线数据模型

## 技术栈

- node 版本推荐 V18
- [React 18](https://beta.reactjs.org/)
- [React Router 6.0](https://reactrouter.com/en/main)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design 5.0](https://ant.design/index-cn)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [unocss](https://github.com/unocss/unocss) [unocss互动使用文档](https://uno.antfu.me/)。
- [SWR](https://github.com/vercel/swr) [SWR中文文档](https://swr.vercel.app/zh-CN)

## 开发约定

1. 使用 `pnpm` 作为包管理工具。安装 `pnpm` 后，使用 `pnpm i` 安装依赖。
2. 必须严格遵守 [TypeScript](https://www.typescriptlang.org/) 语法规范。不要使用 `any` 类型。
3. Function 组件必须使用 `React.FC` 类型。不推荐使用 Class 组件
4. 接口请求封装再 `src/api` 目录下，使用 `axios` 库。
5. swr 用来做全局数据请求
6. 全局状态管理使用 `zustand` 库。 `src/stote` 目录下。
7. Unocss First! 系统 css 方案这里推荐使用`unocss`。同时也提供了‘sass`的支持。(vscode 推荐下载unocss插件，提升开发体验)

## 目录结构

```bash
├── src
│   ├── main.tsx # 入口文件
│   ├── api # 接口请求
│   ├── assets # 静态资源
│   ├── components # 公共组件
│   ├── routes # 路由
│   ├── shared # 公共方法
│   ├── store # 全局状态管理
│   ├── types # 全局类型定义
│   ├── views # 页面
├── env # 环境变量
