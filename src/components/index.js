import Vue from 'vue'
import VpButton from './button'

const Components = {
    VpButton,
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
