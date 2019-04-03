import Vue from 'vue'
import VpButton from './button'
import VpInput from './input'
import VpSwitch from './switch'
import VpCountup from './countup'
import VpLoading from './loading'
import VpToast from './toast'
import VpBadge from './badge'

const Components = {
    VpButton,
    VpInput,
    VpSwitch,
    VpCountup,
    VpLoading,
    VpToast,
    VpBadge
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
