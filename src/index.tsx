import { createConfig, setElement } from './context/config'
import { NodeListRender } from '@/components/NodeRenderer'
// import RCode from '@/examples/RCode/index.vue'
// import RThink from '@/examples/RThink/index.vue'
import HtmlRender from '@/components/HtmlRender'

// createConfig({
//     'THINK':(node:HTMLElement) => <RThink node={node}></RThink>,
//     'PRE': (node)=> <RCode node={node}></RCode>
// })

// setElement('PRE', RCode)
// setElement('PRE', (node)=> <RCode node={node}></RCode>)
export default HtmlRender
export {
    createConfig,
    setElement,
    NodeListRender
}