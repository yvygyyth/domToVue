<script setup lang="ts">
import useClipboard from 'vue-clipboard3';
import { useNodeInfo } from './useNodeInfo'
import { ref, type PropType } from 'vue'
const props = defineProps({
    node: {
        type: Object as PropType<HTMLElement>,
        required: true,
    },
})

const { language, codeContent, highlightCode } = useNodeInfo(props)
const { toClipboard } = useClipboard();

const copyText = ref('复制')
const onCopy = async() => {
    try {
        await toClipboard(codeContent.value);
        copyText.value = '已复制'
        setTimeout(() => {
            copyText.value = '复制'
        }, 2000)
    } catch (e) {
        copyText.value = '复制失败'
    }    
}

</script>

<template>
    <div class="code-block-container">
        <div class="code-header">
            <div class="language-type">{{ language }}</div>
            <div class="copy-btn" @click="onCopy">
                <div>{{ copyText }}</div>
            </div>
        </div>
        <div class="code-body">
            <pre><code><div v-html="highlightCode"></div></code></pre>
        </div>
    </div>
</template>

<style scoped lang="scss">
.code-block-container{
    background-color: #F9F9F9;
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.05);
    margin: 12px 0;
    overflow: visible;
    max-width: 100%;
    position: relative;
    .code-header,.code-body{
        padding: 6px 12px;
    }
    .code-header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        .copy-btn{
            @include flex-row-gap(6px);
            align-items: center;
            border: none;
            position: sticky;
            top: 0;
            cursor: pointer;
            background-color: transparent;
            color: #999;
            &:active{
                color: #666;
            }
        }
    }
    .code-body{
        overflow-x: auto;
        @include custom-scrollbar;
        pre{
            margin: 0;
            padding: 0;
            height: fit-content;
            line-height: 1.5;
        }
    }
}
</style>