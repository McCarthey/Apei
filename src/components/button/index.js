import VpButton from './src/button';

/* istanbul ignore next */
VpButton.install = function(Vue) {
    Vue.component(VpButton.name, VpButton);
};

export default VpButton;