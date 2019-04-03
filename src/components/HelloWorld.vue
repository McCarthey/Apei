<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <vp-button
            type="primary"
            @click="handleClick"
        >
            开始第二个Count
        </vp-button>
        <vp-input
            v-model="phoneNumber"
            placeholder="请输入手机号码"
        >
            手机号码
        </vp-input>
        <vp-countup
            :start-val="1"
            :end-val="1388"
            :duration="2"
            class="demo-count"
        />
        <br>
        <vp-countup
            :end-val="88.88"
            :duration="3"
            :decimals="2"
            :start="startCount"
            class="demo-count"
        />
        <vp-switch v-model="isEmpty">
            开关
        </vp-switch>
        <vp-loading
            :show="startCount"
            text="vivo钱包"
        />
        <vp-toast
            :value="true"
            text="成功啦"
        />
        <vp-badge
            text="100"
        />
    </div>
</template>

<script>
	import VpButton from './button'
	import VpInput from './input'
    import VpSwitch from './switch'
    import VpCountup from './countup'
    import VpLoading from './loading'
    import VpToast from './toast'
    import VpBadge from './badge'

	export default {
		name: 'HelloWorld',
		components: { VpButton, VpInput, VpCountup, VpSwitch, VpLoading, VpToast, VpBadge },
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
</style>
