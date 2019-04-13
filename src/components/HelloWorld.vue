<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <v-button
            plain
            @click.native="handleLoading"
        >
            loading弹出
        </v-button>
        <v-button
            type="primary"
            @click.native="handleClick"
        >
            toast弹出
        </v-button>
        <toast v-model="show" text="Hello World"></toast>
        <badge text="123"></badge>
        <inline-v-switch v-model="value"></inline-v-switch>
        <countup :end-val="88.88" :duration="3" :decimals="2" class="demo-count"></countup>
        <group title="小可爱">
            <v-switch title="给爷笑一个"></v-switch>
            <v-switch title="爷给你笑一个" inline-desc="亲一口" v-model="value1"></v-switch>
        </group>


        <group title="确认输入">
            <v-input title="请输入6位数字" type="text" placeholder="" v-model="password" :min="6" :max="6"></v-input>
            <v-input title="请确认6位数字" v-model="password2" type="text" placeholder="" :equal-with="password"></v-input>
        </group>

        <group title="enter事件">
            <v-input title="输入完成后回车" type="text" placeholder=""></v-input>
        </group>

        <group title="验证码">
            <v-input title="验证码">
                <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
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
import VButton from './v-button'
import Toast from './toast'
import Badge from './badge'
import Countup from './countup'
import Group from './group'
import VSwitch from './v-switch'
import InlineVSwitch from './inline-v-switch'
import VInput from './v-input'
import Loading from './loading'
import Popup from './popup'
import GroupTitle from './group-title'
import Grid from './grid'
import GridItem from './grid-item'

export default {
    name: 'HelloWorld',
    components: { VButton, Toast, Badge, Countup, VSwitch, Group, InlineVSwitch, VInput, Loading, Popup, GroupTitle, Grid, GridItem },
    props: {
        msg: String,
    },
    data() {
        return {
            phoneNumber: '',
            isEmpty: false,
            startCount: false,
            show: false,
            value1: false,
            password: '',
            password2: '',
            value: false,
            showLoading: false
        }
    },
    methods: {
        handleClick() {
            this.show = true
        },
        countDone() {
            this.startCount = false
        },
        log (str) {
            console.log(str)
        },
        handleLoading() {
            this.showLoading = true
            setTimeout(()=>{
                this.showLoading = false
            }, 3000)
        }
    },
}
</script>

<style lang="less">
	@import "../styles/reset.less";
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
        font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
        font-size: 6em;
        color: #415FFF;
    }
    .position-vertical-demo {
        background-color: #415FFF;
        color: #000;
        text-align: center;
        padding: 15px;
    }
    .popup0 {
  padding-bottom:15px;
  height:200px;
}
</style>
