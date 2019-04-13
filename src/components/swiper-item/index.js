import SwiperItem from './src/swiper-item.vue';

/* istanbul ignore next */
SwiperItem.install = function(Vue) {
    Vue.component(SwiperItem.name, SwiperItem);
};

export default SwiperItem;