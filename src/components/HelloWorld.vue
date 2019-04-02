<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <vp-button
            type="primary"
            @click="handleClick"
        >
            提交
        </vp-button>
        <vp-input
            v-model="phoneNumber"
            placeholder="请输入手机号码"
        >
            手机号码
        </vp-input>
    </div>
</template>

<script>
import VpButton from './button'
import VpInput from './input'
export default {
    name: 'HelloWorld',
    components: { VpButton, VpInput },
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
</style>
