import VpToast from './src/toast.vue';

/* istanbul ignore next */
VpToast.install = function(Vue) {
  Vue.component(VpToast.name, VpToast);
};

export default VpToast;