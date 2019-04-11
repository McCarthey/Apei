<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <vp-button
            type="primary"
            @click="handleClick"
        >
            开始第二个Count
        </vp-button>
        <vp-group title="使用icon代替title">
            <vp-input
                title="发送验证码"
                class="vbase-vcode"
            >
                <vp-button
                    slot="right"
                    type="primary"
                    mini
                >
                    发送验证码
                </vp-button>
            </vp-input>
            <vp-input
                v-model="phoneNumber"
                title="手机号码格式化"
                mask="9999 999 9999"
                :max="13"
                is-type="china-mobile"
            >
                手机号码
            </vp-input>
            <!-- <vp-input
                v-model="phoneNumber"
                title="手机号码格式化"
                mask="9999 999 9999"
                :max="13"
                is-type="china-mobile"
            >
                手机号码
            </vp-input>
            <vp-input
                v-model="phoneNumber"
                title="手机号码格式化"
                mask="9999 999 9999"
                :max="13"
                is-type="china-mobile"
            >
                手机号码
            </vp-input> -->
            <vp-switch
                v-model="isEmpty"
            >
                手机号码
            </vp-switch>
        </vp-group>
        <vp-countup
            tag="div"
            :start-val="1"
            :end-val="1388"
            :duration="2"
            class="demo-count"
        />
        <vp-countup
            :end-val="88.88"
            :duration="3"
            :decimals="2"
            :start="startCount"
            :on-complete="countDone"
            class="demo-count"
        />
        <vp-loading
            :show="startCount"
            text="vivo钱包"
        />
        <vp-toast
            :value="true"
            text="成功啦"
        />
        <vp-badge
            text="10000"
            max="99"
        />
        <vp-inline-switch v-model="isEmpty" />
        <vp-popup
            v-model="startCount"
            position="bottom"
        >
            <div class="position-vertical-demo">
                I'm on bottom.
            </div>
        </vp-popup>
    </div>
</template>

<script>
import VpButton from './button'
import VpInput from './input'
import VpSwitch from './switch'
import VpInlineSwitch from './inline-switch'
import VpCountup from './countup'
import VpLoading from './loading'
import VpToast from './toast'
import VpBadge from './badge'
import VpPopup from './popup'
import VpGroup from './group'

export default {
    name: 'HelloWorld',
    components: { VpButton, VpInput, VpCountup, VpInlineSwitch, VpLoading, VpToast, VpBadge, VpPopup, VpGroup, VpSwitch },
    props: {
        msg: String,
    },
    data() {
        return {
            phoneNumber: '',
            isEmpty: false,
            startCount: false
        }
    },
    methods: {
        handleClick() {
            this.startCount = true
        },
        countDone() {
            this.startCount = false
        }
    },
}
</script>

<style lang="less">
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
        color: #04BE02;
    }
    .position-vertical-demo {
        background-color: #ffe26d;
        color: #000;
        text-align: center;
        padding: 15px;
    }
</style>
