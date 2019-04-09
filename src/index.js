import VpButton from './components/button/index.js'
import VpInput from './components/input/index.js'
import VpSwitch from './components/switch/index.js'
import VpCountup from './components/countup/index.js'
import VpLoading from './components/loading/index.js'
import VpToast from './components/toast/index.js'
import VpBadge from './components/badge/index.js'

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
