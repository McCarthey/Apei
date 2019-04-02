<template>
    <button
        class="vbase-btn"
        :class="classes"
        :disabled="disabled"
        :type="actionType"
        @click="handleClick"
    >
        <i
            v-if="showLoading"
            class="vbase-loading"
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
                    'vbase-btn_disabled': !this.plain && this.disabled,
                    'vbase-btn_plain-disabled': this.plain && this.disabled,
                    'vbase-btn_mini': this.mini,
                },
                !this.plain ? `vbase-btn_${this.type}` : '',
                this.plain ? `vbase-btn_plain-${this.type}` : '',
                this.showLoading ? `vbase-btn_loading` : '',
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
@import '../../styles/vbase/widget/vbase-button/vbase-button.less';
@import '../../styles/vbase/widget/vbase-loading/vbase-loading.less';
</style>
