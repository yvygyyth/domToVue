import { useConfig } from "@/context/config";
import type { NodeHandlerReturn } from '@/core/node-types'
export const resolveNode = (node: Node): NodeHandlerReturn => {
    const config = useConfig();

    // 1. 优先处理自定义匹配器
    for (const { matcher, handler } of config.custom) {
        if (matcher(node)) {
            return handler(node);
        }
    }

    // 2. 处理标签名（仅适用于元素节点）
    const tagHandler = config.nodeName[node.nodeName];
    if (tagHandler) {
        return tagHandler(node);
    }

    // 3. 处理节点类型
    const typeHandler = config.nodeType[node.nodeType];
    if (typeHandler) {
        return typeHandler(node);
    }

    return null;
};
