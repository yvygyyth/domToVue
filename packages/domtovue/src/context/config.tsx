import type { RenderConfig, NodeHandler } from '@/core/node-types'
import { defaultConfig } from '@/core/node-types'
import type { DefineComponent } from 'vue'

let config: RenderConfig
export function createConfig(elementHandlers: RenderConfig['elementHandlers']) {
    config = {
        ...defaultConfig,
        elementHandlers: {
            ...defaultConfig.elementHandlers,
            ...elementHandlers
        }
    }
    return config
}

export function useConfig() {
    if (!config) throw new Error('Missing config provider')
    return config
}

export function setElement(tagName: string, handler: NodeHandler): void;
export function setElement(tagName: string, component: DefineComponent<{}, {}, any>): void;
export function setElement(
    tagName: string,
    handlerOrComponent: NodeHandler | DefineComponent<{}, {}, any>
  ): void {
    const normalizedTag = tagName.toUpperCase();
    
    if (typeof handlerOrComponent === 'function') {
        config.elementHandlers[normalizedTag] = handlerOrComponent as NodeHandler;
    } else {
        const Comp = handlerOrComponent as DefineComponent;
        config.elementHandlers[normalizedTag] = (node) => <Comp {...{ node }}></Comp>;
    }
}