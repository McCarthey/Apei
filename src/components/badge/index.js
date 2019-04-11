    
import VpBadge from './src/badge';

/* istanbul ignore next */
VpBadge.install = function(Vue) {
    Vue.component(VpBadge.name, VpBadge);
};

export default VpBadge;