import hljs from 'highlight.js'
import { computed } from 'vue'

export const useNodeInfo = (props: { node: HTMLElement }) => {
    const language = computed(() => props.node.className.match(/language-(\w+)/)?.[1] || 'python')

    const codeContent = computed(() => props.node.textContent?.trim() || '')

    const highlightCode = computed(() => {
        // 将获取 textContent 和高亮化合并到一个地方
        return hljs.highlight(codeContent.value, {
            language: language.value,
            ignoreIllegals: true
        }).value
    })

    return {
        language,
        codeContent,
        highlightCode
    }
}
