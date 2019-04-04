<template>
    <div class="vbase-cells">
        <div class="vbase-cell">
            <div class="vbase-cell__hd">
                <label class="vbase-label">
                    <slot />
                </label>
            </div>
            <div class="vbase-cell__bd">
                <input
                    :type="type"
                    class="vbase-input"
                    :placeholder="placeholder"
                    :value="currentValue"
                    @input="handleInput"
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'VpInput',
    props: {
        type: {
            type: String,
            default: 'text',
        },
        // eslint-disable-next-line
        value: {},
        placeholder: String,
    },
    data() {
        return {
            currentValue: '',
        }
    },
    watch: {
        value(val) {
            this.currentValue = val
        },
        currentValue(val) {
            this.$emit('input', val)
        },
    },
    methods: {
        handleInput(e) {
            this.currentValue = e.target.value
        },
    },
}
</script>

<style lang="less">
@import '../../../styles/vbase/widget/vbase-cell/vbase-form/vbase-form_common.less';
@import '../../../styles/vbase/widget/vbase-cell/vbase-cell_global.less';
</style>


