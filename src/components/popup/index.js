import VpPopup from './src/popup.vue';

/* istanbul ignore next */
VpPopup.install = function(Vue) {
    Vue.component(VpPopup.name, VpPopup);
};

export default VpPopup;