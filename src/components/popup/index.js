import Popup from './src/popup.vue';

/* istanbul ignore next */
Popup.install = function(Vue) {
    Vue.component(Popup.name, Popup);
};

export default Popup;