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
<script setup lang="ts">
import { setComponent } from 'domtovue'
import HtmlRender from 'domtovue'
import RThink from './RThink.vue'

// 注册自定义组件
setComponent('THINK', RThink)


// 原始DOM字符串（包含常规标签和自定义标签）
const domStr = `
  <think>用户思考过程示例文本</think>
  <pre><code>console.log('Hello World')</code></pre>
  <p>文本节点换行处理\nexample</p>
`
</script>

<template>
  <HtmlRender :html="domStr" />
</template>

```

```vue组件
<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
    node: {
        type: Object as PropType<Node>,
        required: true,
    },
})

</script>

<template>
    <div class="think">
        {{ node.textContent }}
    </div>
</template>

<style scoped lang="scss">
.think{
    display: block;
    color: #8b8b8b;
    border-left: 2px solid #eee;
    padding-left: 12px;
    line-height: 30px;
}
</style>
```
