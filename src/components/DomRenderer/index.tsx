import { defineComponent } from 'vue';
import { getNodeHandler } from './handle'


// 组件：递归渲染单个 Node
const DomRenderer = defineComponent({
    name: 'DomRenderer',
    props: {
        node: {
            type: Object as () => Node,
            required: true,
        },
    },
    setup(props) {
        return () => {
            const node = props.node;
            return getNodeHandler(node);
        };
    },
});

const DomRenderers = defineComponent({
    name: 'DomRenderers',
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
                    <DomRenderer key={index} node={child} />
                ))}
            </>
        );
    },
});

export { DomRenderer, DomRenderers };
