<template>
    <div class="vp-x-switch vbase-cell vbase-cell_switch">
        <div class="vbase-cell__bd">
            <label class="vbase-label">
                <slot />
            </label>
        </div>
        <div class="vbase-cell__ft">
            <input
                v-model="currentValue"
                class="vbase-switch"
                type="checkbox"
                :disabled="disabled"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'VpSwitch',
    props: {
        value: Boolean,
        disabled: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        currentValue: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>

<style lang="less">
@import '../../styles/vbase/widget/vbase-cell/vbase-switch.less';
</style>
