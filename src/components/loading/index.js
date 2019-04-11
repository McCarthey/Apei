import VpLoading from './src/loading';

/* istanbul ignore next */
VpLoading.install = function(Vue) {
    Vue.component(VpLoading.name, VpLoading);
};

export default VpLoading;