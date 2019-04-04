import VpCountup from './src/countup';

/* istanbul ignore next */
VpCountup.install = function(Vue) {
  Vue.component(VpCountup.name, VpCountup);
};

export default VpCountup;