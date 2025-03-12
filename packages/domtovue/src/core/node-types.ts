import type { Component } from "vue";
import type { JSX } from "vue/jsx-runtime";

export type NodeConstants = typeof Node;
export type NodeType = Node['nodeType'];
export type VueComponent = Component;

// 基础节点类型映射
export interface NodeTypeMap{
    [Node.ELEMENT_NODE]: Element;
    [Node.TEXT_NODE]: Text;
    [Node.COMMENT_NODE]: Comment;
    // [Node.DOCUMENT_NODE]: Document;
    // [Node.DOCUMENT_TYPE_NODE]: DocumentType;
    // [Node.DOCUMENT_FRAGMENT_NODE]: DocumentFragment;
}

export type NodeTypeRecord<T extends NodeType> = 
    T extends keyof NodeTypeMap ?
    NodeTypeMap[T] :
    Node;

export interface NodeTagMap{
    '#text': Text;
    '#comment': Comment
}

export type NodeTagRecord<T extends string> = 
    T extends keyof NodeTagMap ?
    NodeTagMap[T] :
    Node;

// 自定义匹配函数类型
export type MatcherFn<N extends Node = Node> = (node: N) => boolean;

export type NodeHandlerReturn = Component | string | null | JSX.Element;

// 处理函数类型
export type Handler<T extends Node = Node> = (node:T) => NodeHandlerReturn;

type NodeTypeHandlers = {
    [K in NodeType]: Handler<NodeTypeRecord<K>>;
}

type TagNameHandlers = {
    [K in string]: Handler<NodeTagRecord<K>>
}

type CustomRule<T extends Node = Node> = {
    matcher: MatcherFn<T>;
    handler: Handler<T>;
};
// 配置存储结构
export interface HandlerConfig {
    nodeType: NodeTypeHandlers;
    nodeName: TagNameHandlers;
    custom: Array<CustomRule>;
}