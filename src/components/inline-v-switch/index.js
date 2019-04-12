import InlineVSwitch from './src/inline-v-switch.vue';

/* istanbul ignore next */
InlineVSwitch.install = function(Vue) {
    Vue.component(InlineVSwitch.name, InlineVSwitch);
};

export default InlineVSwitch;