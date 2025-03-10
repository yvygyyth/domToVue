import { NodeListRender } from '@/components/NodeRenderer/index'
export const handleElement = (node: HTMLElement) =>{
    const Tag = (node as HTMLElement).tagName.toLowerCase();
    const attrs = Array.from((node as HTMLElement).attributes).reduce((acc, attr) => {
        acc[attr.name] = attr.value;
        return acc;
    }, {} as Record<string, string>);
    return (
        <Tag {...attrs}>
            <NodeListRender nodes={node.childNodes} />
        </Tag>
    );
}