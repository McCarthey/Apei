import VButton from "./components/v-button/index.js";
import VInput from "./components/v-input/index.js"
const Components = {
    VButton,
    VInput
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
    VButton,
    VInput
};
