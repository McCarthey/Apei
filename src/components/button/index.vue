<template>
    <button
        :style="buttonStyle"
        class="weui-btn"
        :class="classes"
        :disabled="disabled"
        :type="actionType"
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
        gradients: {
            type: Array,
            validator: function(val) {
                return val.length === 2
            },
        },
    },
    computed: {
        noBorder() {
            return Array.isArray(this.gradients)
        },
        buttonStyle() {
            if (this.gradients) {
                return {
                    background: `linear-gradient(90deg, ${this.gradients[0]}, ${this.gradients[1]})`,
                    color: '#FFFFFF',
                }
            }
        },
        classes() {
            return [
                {
                    'weui-btn_disabled': !this.plain && this.disabled,
                    'weui-btn_plain-disabled': this.plain && this.disabled,
                    'weui-btn_mini': this.mini,
                    'vux-x-button-no-border': this.noBorder,
                },
                !this.plain ? `weui-btn_${this.type}` : '',
                this.plain ? `weui-btn_plain-${this.type}` : '',
                this.showLoading ? `weui-btn_loading` : '',
            ]
        },
    },
    methods: {},
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui-button/weui-button.less';
</style>
