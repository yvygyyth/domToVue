/**
 * 将 DOM 字符串解析为 Document，并返回其 body 的直接子节点集合
 * @param domString 输入的 DOM 字符串（可以是片段或完整文档）
 * @returns 包含所有子节点的 NodeList（元素、文本、注释等），保持原生集合结构
 */
export function getBodyChildNodes(domString: string): NodeListOf<ChildNode> {
    const parser = new DOMParser();
    const doc = parser.parseFromString(domString, 'text/html');
    return doc.body.childNodes;
}