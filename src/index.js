import Badge from "./components/badge/index.js";
import Countup from "./components/countup/index.js";
import Grid from "./components/grid/index.js";
import GridItem from "./components/grid-item/index.js";
import Group from "./components/group/index.js";
import GroupTitle from "./components/group-title/index.js";
import Icon from "./components/icon/index.js";
import InlineDesc from "./components/inline-desc/index.js";
import InlineVSwitch from "./components/inline-v-switch/index.js";
import Loading from "./components/loading/index.js";
import Popup from "./components/popup/index.js";
import Swiper from "./components/swiper/index.js";
import SwiperItem from "./components/swiper-item/index.js";
import Toast from "./components/toast/index.js";
import VButton from "./components/v-button/index.js";
import VInput from "./components/v-input/index.js";
import VSwitch from "./components/v-switch/index.js";

const Components = {
    Badge,
    Countup,
    Grid,
    GridItem,
    Group,
    GroupTitle,
    Icon,
    InlineDesc,
    InlineVSwitch,
    Loading,
    Popup,
    Swiper,
    SwiperItem,
    Toast,
    VButton,
    VInput,
    VSwitch
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
    Badge,
    Countup,
    Grid,
    GridItem,
    Group,
    GroupTitle,
    Icon,
    InlineDesc,
    InlineVSwitch,
    Loading,
    Popup,
    Swiper,
    SwiperItem,
    Toast,
    VButton,
    VInput,
    VSwitch
};
