/**
 * 将 DOM 字符串解析为 Document，并返回其 body 的直接子节点数组
 * @param domString 输入的 DOM 字符串（可以是片段或完整文档）
 * @returns 包含所有子节点的数组（元素、文本、注释等）
 */
export function getBodyChildNodes(domString: string): Node[] {
    // 1. 创建解析器并解析字符串为 HTML Document
    const parser = new DOMParser();
    const doc: Document = parser.parseFromString(domString, 'text/html');
  
    // 2. 获取 body 节点（处理可能的 null）
    const body: HTMLElement | null = doc.body;
    if (!body) return [];
  
    // 3. 提取 childNodes 并转为数组（保留所有节点类型）
    return Array.from(body.childNodes);
}