import VpButton from './button/index.js'
import VpInput from './input/index.js'
import VpSwitch from './switch/index.js'
import VpCountup from './countup/index.js'
import VpLoading from './loading/index.js'
import VpToast from './toast/index.js'
import VpBadge from './badge/index.js'

const Components = {
    VpButton,
    VpInput,
    VpSwitch,
    VpCountup,
    VpLoading,
    VpToast,
    VpBadge,
}

const install = function(Vue) {
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name])
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default { install, ...Components }
