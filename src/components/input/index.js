import VpInput from './src/input';

/* istanbul ignore next */
VpInput.install = function(Vue) {
    Vue.component(VpInput.name, VpInput);
};

export default VpInput;