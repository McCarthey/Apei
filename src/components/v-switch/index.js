import VSwitch from './src/v-switch.vue';

/* istanbul ignore next */
VSwitch.install = function(Vue) {
    Vue.component(VSwitch.name, VSwitch);
};

export default VSwitch;