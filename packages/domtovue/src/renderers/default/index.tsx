import { NodeListRender } from '@/components/NodeRenderer/index'
import type { HandlerConfig } from '@/core/node-types'

const handleText = (textNode: Text) => textNode.textContent;
const handleComment = () => null;
const handleElement = (node: Element) =>{
    const Tag = node.tagName.toLowerCase();
    const attrs = Array.from(node.attributes).reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
    }, {} as Record<string, string>);
    return (
        <Tag {...attrs}><NodeListRender nodes={node.childNodes} /></Tag>
    );
}

export const defaultConfig: HandlerConfig = {
    // @ts-ignore
    nodeType: {
        [Node.TEXT_NODE]: handleText,
        [Node.COMMENT_NODE]: handleComment,
        [Node.ELEMENT_NODE]: handleElement
    },
    // @ts-ignore
    tagName: {
        "#text":handleText,
        "#comment":handleComment
    },
    custom: []
}