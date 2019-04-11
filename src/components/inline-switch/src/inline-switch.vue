<template>
    <input
        v-model="currentValue"
        class="vp-inline-switch vbase-switch"
        type="checkbox"
        :disabled="disabled"
    >
</template>

<script>
export default {
    name: 'VpInlineSwitch',
    props: {
        disabled: Boolean,
        value: {
            type: [Boolean, String, Number],
            default: false,
        },
        valueMap: {
            type: Array,
            default: () => [false, true],
        },
    },
    data() {
        return {
            currentValue: this.toBoolean(this.value),
        }
    },
    watch: {
        currentValue(val) {
            const rawValue = this.toRaw(val)
            this.$emit('input', rawValue)
            this.$emit('on-change', rawValue)
        },
        value(val) {
            this.currentValue = this.toBoolean(val)
        },
    },
    methods: {
        toBoolean(val) {
            if (!this.valueMap) {
                return val
            } else {
                const index = this.valueMap.indexOf(val)
                return index === 1
            }
        },
        toRaw(val) {
            if (!this.valueMap) {
                return val
            } else {
                return this.valueMap[val ? 1 : 0]
            }
        },
    },
}
</script>

<style lang="less">
    @import '../../../styles/variable.less';
	@import '../../../styles/vbase/widget/vbase-cell/vbase-form/vbase-form_common';
	@import '../../../styles/vbase/widget/vbase-cell/vbase-switch';

	.vbase-cell_switch .vbase-cell__ft {
		font-size: 0;
		position: relative;
	}

	input.vbase-switch[disabled] {
		opacity: @switch-disabled-opacity;
	}

	.vp-inline-switch.vbase-cell_switch {
		padding-top: 6px;
		padding-bottom: 6px;
	}

	.vp-inline-switch-overlay {
		width: 60px;
		height: 50px;
		position: absolute;
		right: 0;
		top: 0;
		opacity: 0;
	}
</style>
