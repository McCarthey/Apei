import Vue from 'vue'
import ApButton from './button'
const Components = {
    ApButton,
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
