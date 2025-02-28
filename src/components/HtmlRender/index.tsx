import { defineComponent, computed } from 'vue';
import { NodeListRender } from '@/components/NodeRenderer'
import { getBodyChildNodes } from '@/core/parser'

const HtmlRender = defineComponent({
    name: 'HtmlRender',
    props: {
        html: {
            type: String,
            default: '',
        },
    },
    setup(props) {
        const nodes = computed(() => getBodyChildNodes(props.html))
        return () => <NodeListRender nodes={nodes.value}></NodeListRender>;
    },
});

export default HtmlRender;