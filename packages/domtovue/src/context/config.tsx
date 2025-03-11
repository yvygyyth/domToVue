import type { NodeType, Handler, NodeTypeMap, NodeTagMap, MatcherFn, HandlerConfig, VueComponent } from '@/core/node-types'
import { defaultConfig } from '@/renderers/default'

let config: HandlerConfig = {
    ...defaultConfig
}

export function useConfig() {
    if (!config) throw new Error('配置不存在')
    return config
}

export function setHandler<T extends keyof NodeTypeMap>(
    type: T,
    handler: Handler<NodeTypeMap[T]>
): void;

export function setHandler<T extends keyof NodeTagMap>(
    tagName: T,
    handler: Handler<NodeTagMap[T]>
): void;

export function setHandler<T extends Node>(
    matcher: MatcherFn<T>,
    handler: Handler<T>
): void;

// 函数实现
export function setHandler(
    selector: NodeType | string | MatcherFn,
    handler: Handler
): void {
    if (typeof selector === 'number') {
        const type = selector as keyof NodeTypeMap;
        config.nodeType[type] = handler;
    } else if (typeof selector === 'string') {
        config.tagName[selector] = handler;
    } else if (typeof selector === 'function') {
        config.custom.push({
            matcher: selector,
            handler
        });
    }
}

export function setComponent<T extends keyof NodeTypeMap>(
    type: T,
    component: VueComponent<NodeTypeMap[T]>
): void;

export function setComponent<T extends keyof NodeTagMap>(
    tagName: T,
    component: VueComponent<NodeTagMap[T]>
): void;

export function setComponent<T extends Node>(
    matcher: MatcherFn<T>,
    component: VueComponent
): void;
export function setComponent(
    selector: NodeType | string | MatcherFn,
    component: VueComponent
){
    const Tag = component
    const handler = (node: Node) => {
        // 类型安全转换
        if (typeof selector === 'number') {
            return <Tag node={node as NodeTypeMap[typeof selector]} />;
        } else if (typeof selector === 'string') {
            return <Tag node={node as NodeTagMap[typeof selector]} />;
        }
        return <Tag node={node} />;
    };

    if (typeof selector === 'number') {
        const type = selector as keyof NodeTypeMap;
        config.nodeType[type] = handler;
    } else if (typeof selector === 'string') {
        config.tagName[selector] = handler;
    } else if (typeof selector === 'function') {
        config.custom.push({
            matcher: selector,
            handler
        });
    }
}