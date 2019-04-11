import VButton from "./components/button/index.js";

const Components = {
    VButton
};

const install = function (Vue) {
    Object.keys(Components).forEach(name => {
        Vue.component(name, Components[name]);
    });
};

if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    VButton
};
