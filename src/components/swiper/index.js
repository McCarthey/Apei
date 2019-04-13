import Swiper from './src/swiper.vue';

/* istanbul ignore next */
Swiper.install = function(Vue) {
    Vue.component(Swiper.name, Swiper);
};

export default Swiper;