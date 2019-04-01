<template>
    <button
        class="weui-btn"
        :class="classes"
        :disabled="disabled"
        :type="actionType"
        @click="handleClick"
    >
        <i
            v-if="showLoading"
            class="weui-loading"
        />
        <slot>{{ text }}</slot>
    </button>
</template>

<script>
export default {
    name: 'ApButton',
    props: {
        type: {
            type: String,
            default: 'default',
        },
        disabled: Boolean,
        mini: Boolean,
        plain: Boolean,
        text: String,
        actionType: String,
        showLoading: Boolean,
    },
    computed: {
        classes() {
            return [
                {
                    'weui-btn_disabled': !this.plain && this.disabled,
                    'weui-btn_plain-disabled': this.plain && this.disabled,
                    'weui-btn_mini': this.mini,
                },
                !this.plain ? `weui-btn_${this.type}` : '',
                this.plain ? `weui-btn_plain-${this.type}` : '',
                this.showLoading ? `weui-btn_loading` : '',
            ]
        },
    },
    methods: {
        handleClick(ev) {
            this.$emit('click', ev)
        },
    },
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui-button/weui-button.less';
</style>
