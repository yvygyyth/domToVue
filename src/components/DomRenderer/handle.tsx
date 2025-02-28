import { DomRenderers } from './index'
import type { VNode } from 'vue';
import RCode from './DomReplaceStore/RCode.vue'
import RThink from './DomReplaceStore/RThink.vue'
interface NodeHandler {
    [key: string]: (node: HTMLElement ) => VNode | null;
}


const elementToHandler:NodeHandler = {
    'THINK':(node:HTMLElement) => <RThink node={node}></RThink>,
    'PRE':(node:HTMLElement)=> <RCode node={node}></RCode>
}

export function getNodeHandler(node: Node){
    if(node.nodeType === Node.TEXT_NODE){
        const text = node.textContent;
        return text ? text: null;
    }else if(node.nodeType === Node.ELEMENT_NODE){
        const customizeTag = elementToHandler[node.nodeName]
        if(customizeTag){
            return customizeTag(node as HTMLElement)
        }else{
            const Tag = (node as HTMLElement).tagName.toLowerCase();
            const attrs = Array.from((node as HTMLElement).attributes).reduce((acc, attr) => {
                acc[attr.name] = attr.value;
                return acc;
            }, {} as Record<string, string>);
            return (
                <Tag {...attrs}>
                    <DomRenderers nodes={node.childNodes} />
                </Tag>
            );
        }
    }  
}