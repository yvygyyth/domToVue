# domtovue 

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-blue?style=flat-square&logo=github)](https://github.com/yvygyyth/domToVue)

将 DOM 节点转换为 Vue 组件的轻量级工具库

> 📦 ​**源码地址**: https://github.com/yvygyyth/domToVue

## 特性

- 🚀 无缝转换 DOM 节点到 Vue 组件
- 🔌 支持多种匹配方式：节点类型/标签名/自定义匹配器
- 💡 提供灵活的配置系统
- 🦾 完整的 TypeScript 类型支持

## 安装

```bash
pnpm install

pnpm -filter examples dev
```

## 快速开始

```typescript
import { setComponent, setHandler } from 'domtovue'
import MyComponent from './MyComponent.vue'

// 注册标签组件
setComponent('CUSTOM-TAG', MyComponent)

// 注册自定义处理程序
setHandler(
  node => node.nodeType === Node.TEXT_NODE,
  textNode => {
    return `处理文本内容: ${textNode.textContent}`
  }
)
```
