import VpSwitch from './src/switch.vue';

/* istanbul ignore next */
VpSwitch.install = function(Vue) {
  Vue.component(VpSwitch.name, VpSwitch);
};

export default VpSwitch;