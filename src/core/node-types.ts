import type { VNode } from "vue";

// 节点返回结果
export type NodeHandlerReturn = VNode | string | null;

// 节点处理器类型
export type NodeHandler<T extends Node = Node> = (
    node: T
) => NodeHandlerReturn

// 渲染配置类型
export interface RenderConfig {
    elementHandlers: {
        [tagName: string]: NodeHandler<HTMLElement>
    }
    textHandler?: NodeHandler<Text>
    commentHandler?: NodeHandler<Comment>
}

// 默认配置
export const defaultConfig: RenderConfig = {
    elementHandlers: {},
    textHandler: (node) => node.textContent,
    commentHandler: () => null
}