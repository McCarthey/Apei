<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<vp-button type="primary" @click="handleClick">
			提交
		</vp-button>
		<vp-input v-model="phoneNumber" placeholder="请输入手机号码">
			手机号码
		</vp-input>
		<vp-countup :start-val="1" :end-val="1388" :duration="2" class="demo-count"></vp-countup>
		<br />
		<vp-countup :end-val="88.88" :duration="3" :decimals="2" class="demo-count"></vp-countup>
        <vp-switch v-model="isEmpty">
            开关
        </vp-switch>
	</div>
</template>

<script>
	import VpButton from './button'
	import VpInput from './input'
    import VpSwitch from './switch'
	import VpCountup from './countup'

	export default {
		name: 'HelloWorld',
		components: { VpButton, VpInput, VpCountup, VpSwitch },
		props: {
			msg: String,
		},
		data() {
			return {
				phoneNumber: '',
			}
		},
		methods: {
			handleClick() {
				console.log('clicked')
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
