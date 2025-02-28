import { defineComponent } from 'vue';
import NodeRender from './NodeRender'

const NodeListRender = defineComponent({
    name: 'NodeListRender',
    props: {
        nodes: {
            type: Object as () => NodeListOf<ChildNode>,
            required: true,
            default: () => [],
        },
    },
    setup(props) {
        return () => (
            <>
                {Array.from(props.nodes).map((child, index) => (
                    <NodeRender key={index} node={child} />
                ))}
            </>
        );
    },
});

export default NodeListRender;