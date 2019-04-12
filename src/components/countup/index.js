import Countup from './src/countup';

/* istanbul ignore next */
Countup.install = function(Vue) {
    Vue.component(Countup.name, Countup);
};

export default Countup;