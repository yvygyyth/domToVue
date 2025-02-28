import { useConfig } from '@/context/config'
import type { NodeHandlerReturn } from '@/core/node-types'
import { handleElement } from './default'

export function resolveNodeHandler(node: Node): NodeHandlerReturn {
  const config = useConfig()
  
  switch (node.nodeType) {
    case Node.ELEMENT_NODE:
        const tagName = (node as HTMLElement).tagName.toUpperCase()
        const handler = config.elementHandlers[tagName] || handleElement
        return handler(node as HTMLElement)
      
    case Node.TEXT_NODE:
        return config.textHandler?.(node as Text) || null
      
    case Node.COMMENT_NODE:
        return config.commentHandler?.(node as Comment) || null
      
    default:
        return null
  }
}