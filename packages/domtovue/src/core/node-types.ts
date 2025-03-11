import type { DefineComponent } from "vue";
import type { JSX } from "vue/jsx-runtime";

export type NodeConstants = typeof Node;
export type NodeType = Node['nodeType'];
export type VueComponent<T extends Node = Node> = DefineComponent<{node:T}>;

// 基础节点类型映射
export interface NodeTypeMap extends Record<NodeType, Node>{
    [Node.ELEMENT_NODE]: Element;
    [Node.TEXT_NODE]: Text;
    [Node.COMMENT_NODE]: Comment;
    // [Node.DOCUMENT_NODE]: Document;
    // [Node.DOCUMENT_TYPE_NODE]: DocumentType;
    // [Node.DOCUMENT_FRAGMENT_NODE]: DocumentFragment;
}
export interface NodeTagMap extends Record<string, Node>{
    '#text': Text;
    '#comment': Comment
}

// 自定义匹配函数类型
export type MatcherFn<N extends Node = Node> = (node: Node) => node is N;

export type NodeHandlerReturn = DefineComponent | string | null | JSX.Element;

// 处理函数类型
export type Handler<T extends Node = Node> = (node:T) => NodeHandlerReturn;

// 配置存储结构
export interface HandlerConfig {
    nodeType: {
        [K in keyof NodeTypeMap]: Handler<NodeTypeMap[K]>
    };
    tagName: {
        [K in keyof NodeTagMap]: Handler<NodeTagMap[K]>
    };
    custom: Array<{
        matcher: MatcherFn;
        handler: Handler;
    }>;
}