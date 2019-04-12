import InlineDesc from './src/inline-desc';

/* istanbul ignore next */
InlineDesc.install = function(Vue) {
    Vue.component(InlineDesc.name, InlineDesc);
};

export default InlineDesc;