import { defineComponent } from 'vue';
import { resolveNodeHandler } from '@/renderers/registry'

const NodeRender = defineComponent({
    name: 'NodeRender',
    props: {
        node: {
            type: Object as () => Node,
            required: true,
        },
    },
    setup(props) {
        return () => {
            return resolveNodeHandler(props.node);
        };
    },
});

export default NodeRender;