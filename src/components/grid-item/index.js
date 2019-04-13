import GridItem from "./src/grid-item";

/* istanbul ignore next */
GridItem.install = function(Vue) {
    Vue.component(GridItem.name, GridItem);
};

export default GridItem;