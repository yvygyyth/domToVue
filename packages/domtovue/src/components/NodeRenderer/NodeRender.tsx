import { defineComponent } from 'vue';
import { resolveNode } from '@/renderers/registry'

const NodeRender = defineComponent({
    name: 'NodeRender',
    props: {
        node: {
            type: Object as () => Node,
            required: true,
        },
    },
    setup(props) {
        console.log('NodeRender', props.node);
        return () => {
            return resolveNode(props.node);
        };
    },
});

export default NodeRender;