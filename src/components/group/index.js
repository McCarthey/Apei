import VpGroup from './src/group';

/* istanbul ignore next */
VpGroup.install = function(Vue) {
    Vue.component(VpGroup.name, VpGroup);
};

export default VpGroup;