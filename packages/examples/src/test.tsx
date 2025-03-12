import RCode from '@/components/RCode/index.vue'
import RThink from '@/components/RThink/index.vue'
import { setComponent, setHandler, useConfig } from 'domtovue'

setComponent('CODE', RCode)
setComponent('THINK', RThink)

const fun = (node:Node)=>{
    return node.nodeType === Node.TEXT_NODE;
    
}

setHandler(fun, (node)=>{
    console.log(node)
    return 'sssssssas阿萨大时代ss'
})

console.log(useConfig())