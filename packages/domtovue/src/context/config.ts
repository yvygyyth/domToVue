import type { NodeType, Handler, NodeTypeRecord, NodeTagRecord, MatcherFn, HandlerConfig, VueComponent } from '@/core/node-types'
import { defaultConfig } from '@/renderers/default'
import { h } from 'vue'
let config: HandlerConfig = {
    ...defaultConfig
}

export function useConfig() {
    if (!config) throw new Error('配置不存在')
    return config
}

export function setHandler<T extends NodeType | string | MatcherFn<Node>>(
    selector: T,
    handler: Handler<T extends NodeType ? NodeTypeRecord<T> : T extends string ? NodeTagRecord<T> : Node>
): void {
    if (typeof selector === 'number') {
        config.nodeType[selector] = handler as Handler<NodeTypeRecord<NodeType>>;
    } else if (typeof selector === 'string') {
        config.nodeName[selector] = handler as Handler<NodeTagRecord<string>>;
    } else {
        config.custom.push({ matcher: selector as MatcherFn<Node>,handler:handler as Handler});
    }
}

export function setComponent<T extends NodeType | string | MatcherFn<Node>>(
    selector: T,
    Component: VueComponent
): void {
    setHandler(selector, (node) => h(Component, { node }));
}
