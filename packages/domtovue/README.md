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
npm install domtovue
# 或
yarn add domtovue
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

## API 文档

### `setComponent<T>`
注册 Vue 组件到指定选择器

```typescript
setComponent<T extends NodeType | string | MatcherFn<Node>>(
  selector: T,
  component: VueComponent
): void
```

**参数：**
- `selector`: 匹配器（支持三种类型）
  - `NodeType`: 节点类型数字常量
  - `string`: 标签名称
  - `MatcherFn`: 自定义匹配函数
- `component`: Vue 组件实例

### `setHandler<T>`
注册自定义处理程序

```typescript
setHandler<T extends NodeType | string | MatcherFn<Node>>(
  selector: T,
  handler: Handler<...>
): void
```

**参数：**
- `selector`: 同 setComponent
- `handler`: 处理函数，支持返回：
  - `string` (渲染文本)
  - `VNode` (Vue 虚拟节点)
  - `Component` (Vue 组件)

### `useConfig()`
获取当前配置

```typescript
interface HandlerConfig {
  nodeType: Record<number, Handler>
  nodeName: Record<string, Handler>
  custom: Array<{
    matcher: MatcherFn
    handler: Handler
  }>
}
```

## 使用示例

### 注册标签组件
```typescript
import RCode from '@/components/RCode.vue'

setComponent('CODE', RCode)  // 匹配 <code> 标签
```

### 处理文本节点
```typescript
setHandler(
  node => node.nodeType === Node.TEXT_NODE,
  textNode => {
    return `文本内容: ${textNode.textContent}`
  }
)
```

### 自定义元素处理
```typescript
setHandler('special-block', node => {
  return h(SpecialComponent, { 
    content: node.textContent 
  })
})
```

## 类型定义

```typescript
type MatcherFn<N extends Node = Node> = (node: N) => boolean
type Handler<T extends Node = Node> = (node: T) => string | VNode | Component

interface VueComponent<T extends Node = Node> {
  (props: { node: T }): JSX.Element
}
```

## 最佳实践

1. **优先使用标签名注册**：
```typescript
setComponent('ARTICLE', ArticleComponent)
```

2. **复杂匹配使用 MatcherFn**：
```typescript
setHandler(
  node => node.classList?.contains('interactive'),
  node => h(InteractiveComponent)
)
```

3. **组合使用多种处理方式**：
```typescript
// 优先处理特殊节点
setHandler('priority-tag', handlePriority)

// 通用处理
setComponent('div', BaseDivComponent)
```