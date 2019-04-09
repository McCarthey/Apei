import VpInlineSwitch from './src/inline-switch.vue';

/* istanbul ignore next */
VpInlineSwitch.install = function(Vue) {
  Vue.component(VpInlineSwitch.name, VpInlineSwitch);
};

export default VpInlineSwitch;