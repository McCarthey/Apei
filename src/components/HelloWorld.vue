<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <v-button
            type="primary"
            @click.native="handleClick"
        >
            primary
        </v-button>
        <toast v-model="show" text="Hello World"></toast>
        <badge text="123"></badge>
        <countup :end-val="88.88" :duration="3" :decimals="2" class="demo-count"></countup>
    </div>
</template>

<script>
import VButton from './v-button'
import Toast from './toast'
import Badge from './badge'
import Countup from './countup'

export default {
    name: 'HelloWorld',
    components: { VButton, Toast, Badge, Countup },
    props: {
        msg: String,
    },
    data() {
        return {
            phoneNumber: '',
            isEmpty: false,
            startCount: false,
            show: false
        }
    },
    methods: {
        handleClick() {
            this.show = true
        },
        countDone() {
            this.startCount = false
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
</style>
