<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <v-button
            type="primary"
            @click="handleClick"
        >
            primary
        </v-button>
        <v-button
            @click="handleClick"
        >
            default
        </v-button>
        <v-button
            disabled
            @click="handleClick"
        >
            disabled
        </v-button>
    </div>
</template>

<script>
import VButton from './v-button'

export default {
    name: 'HelloWorld',
    components: { VButton },
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
