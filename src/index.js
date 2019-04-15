
import Badge from './components/badge'
import VButton from "./components/v-button";
import VInput from "./components/v-input"
import Countup from './components/countup'
import Group from "./components/group";
import VSwitch from "./components/v-switch";
import InlineVSwitch from "./components/inline-v-switch";
import Loading from "./components/loading";
import Popup from "./components/popup";
import GroupTitle from "./components/group-title";
import Grid from "./components/grid";
import GridItem from "./components/grid-item";
import Swiper from "./components/swiper";
import SwiperItem from "./components/swiper-item";

const Components = {
    Badge,
    VButton,
    VInput,
    Countup,
    Group,
    VSwitch,
    InlineVSwitch,
    Loading,
    Popup,
    GroupTitle,
    Grid,
    GridItem,
    Swiper,
    SwiperItem
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
    VButton,
    VInput,
    Countup,
    Group,
    VSwitch,
    InlineVSwitch,
    Loading,
    Popup,
    GroupTitle,
    Grid,
    GridItem,
    Swiper,
    SwiperItem
};
