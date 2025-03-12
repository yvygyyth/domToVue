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