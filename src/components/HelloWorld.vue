<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <v-button plain @click.native="handleLoading">loading弹出</v-button>
        <v-button type="primary" @click.native="handleClick">toast弹出</v-button>
        <toast v-model="show" text="Hello World"></toast>
        <badge text="123" max="99"></badge>
        <inline-v-switch v-model="value"></inline-v-switch>
        <countup :end-val="88.88" :duration="3" :decimals="2" class="demo-count"></countup>
        <group title="小可爱">
            <v-switch title="给爷笑一个"></v-switch>
            <v-switch title="爷给你笑一个" inline-desc="亲一口" v-model="value1"></v-switch>
        </group>

        <group title="确认输入">
            <v-input title="请输入6位数字" type="text" placeholder v-model="password" :min="6" :max="6"></v-input>
            <v-input title="请确认6位数字" v-model="password2" type="text" placeholder :equal-with="password"></v-input>
        </group>

        <group title="enter事件">
            <v-input title="输入完成后回车" type="text" placeholder></v-input>
        </group>

        <group title="验证码">
            <v-input title="验证码">
                <img
                    slot="right-full-height"
                    src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg"
                >
            </v-input>
            <v-input title="发送验证码" class="weui-vcode">
                <v-button slot="right" type="primary" mini>发送验证码</v-button>
            </v-input>
        </group>

        <group-title>4 columns</group-title>
        <grid :show-lr-borders="false">
            <grid-item label="Grid" v-for="i in 4" :key="i">
                <img slot="icon" src="@/assets/logo.png">
            </grid-item>
        </grid>

        <group-title>自动轮播</group-title>
        <swiper
            :list="demoList"
            auto
            style="width:80%;margin:0 auto;"
            height="180px"
            dots-class="custom-bottom"
            dots-position="center"
        ></swiper>

        <group-title>带有item的</group-title>
        <swiper auto height="200px" dots-position="center">
            <swiper-item class="black">
                <h2 class="title fadeInUp animated">它无孔不入</h2>
            </swiper-item>
            <swiper-item class="black">
                <h2 class="title fadeInUp animated">你无处可藏</h2>
            </swiper-item>
            <swiper-item class="black">
                <h2 class="title fadeInUp animated">不是它可恶</h2>
            </swiper-item>
            <swiper-item class="black">
                <h2 class="title fadeInUp animated">而是它不懂你</h2>
            </swiper-item>
            <swiper-item class="black">
                <h2 class="title fadeInUp animated">我们试图</h2>
            </swiper-item>
            <swiper-item class="black">
                <h2 class="title fadeInUp animated">做些改变</h2>
            </swiper-item>
        </swiper>

        <loading :show="showLoading"></loading>

        <popup v-model="value" @on-hide="log('hide')" @on-show="log('show')">
            <div class="popup0">
                <group>
                    <v-switch title="Another XSwitcher"></v-switch>
                    <v-switch title="Show Toast"></v-switch>
                </group>
            </div>
        </popup>
    </div>
</template>

<script>
import VButton from "./v-button";
import Toast from "./toast";
import Badge from "./badge";
import Countup from "./countup";
import Group from "./group";
import VSwitch from "./v-switch";
import InlineVSwitch from "./inline-v-switch";
import VInput from "./v-input";
import Loading from "./loading";
import Popup from "./popup";
import GroupTitle from "./group-title";
import Grid from "./grid";
import GridItem from "./grid-item";
import Swiper from "./swiper";
import SwiperItem from "./swiper-item";

const imgList = [
    "http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg",
    "http://pic1.nipic.com/2008-08-14/2008814183939909_2.jpg",
    "http://pic1.win4000.com/wallpaper/9/5450ae2fdef8a.jpg"
];

const demoList = imgList.map((one, index) => ({
    url: "javascript:",
    img: one
}));
export default {
    name: "HelloWorld",
    components: {
        VButton,
        Toast,
        Badge,
        Countup,
        VSwitch,
        Group,
        InlineVSwitch,
        VInput,
        Loading,
        Popup,
        GroupTitle,
        Grid,
        GridItem,
        Swiper,
        SwiperItem
    },
    props: {
        msg: String
    },
    data() {
        return {
            phoneNumber: "",
            isEmpty: false,
            startCount: false,
            show: false,
            value1: false,
            password: "",
            password2: "",
            value: false,
            showLoading: false,
            demoList: demoList
        };
    },
    methods: {
        handleClick() {
            this.show = true;
        },
        countDone() {
            this.startCount = false;
        },
        log(str) {
            console.log(str);
        },
        handleLoading() {
            this.showLoading = true;
            setTimeout(() => {
                this.showLoading = false;
            }, 3000);
        }
    }
};
</script>

<style lang="less">
@import "../styles/reset.less";
h1 {
    font-size: 64px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.demo-count {
  font-family: "Source Sans Pro", Helvetica, Arial, sans-serif;
  font-size: 32px;
  color: #415fff;
}
.position-vertical-demo {
  background-color: #415fff;
  color: #000;
  text-align: center;
  padding: 15px;
}
.popup0 {
  padding-bottom: 15px;
  height: 200px;
}
.black {
  background-color: #000;
}
.title {
  margin-bottom: 30px;
  line-height: 100px;
  text-align: center;
  color: #fff;
}
.animated {
  animation-duration: 1s;
  animation-fill-mode: both;
}
</style>
