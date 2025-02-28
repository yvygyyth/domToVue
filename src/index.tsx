import { createConfig, setElement } from './context/config'
import RCode from '@/components/defaults/RCode/index.vue'
import RThink from '@/components/defaults/RThink/index.vue'

import HtmlRender from '@/components/HtmlRender'
createConfig({
    'THINK':(node:HTMLElement) => <RThink node={node}></RThink>
})

setElement('PRE', RCode)

export default HtmlRender
export {
    createConfig,
    setElement
}