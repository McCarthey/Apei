<template>
    <div class="vp-switch vbase-cell vbase-cell_switch">
        <div class="vbase-cell__bd">
            <label
                v-if="title"
                class="vbase-label"
                :style="labelStyle"
                :class="labelClass"
            >{{ title }}</label>
            <slot v-else />
            <vp-inline-desc v-if="inlineDesc">
                {{ inlineDesc }}
            </vp-inline-desc>
        </div>
        <div class="vbase-cell__ft">
            <input
                v-model="currentValue"
                class="vbase-switch"
                type="checkbox"
                :disabled="disabled"
            >
            <div
                v-if="preventDefault"
                class="vp-switch-overlay"
                @click="onClick"
            />
        </div>
    </div>
</template>

<script>
import VpInlineDesc from '../../inline-desc/src/inline-desc'
import cleanStyle from '../../../libs/clean-style'

export default {
    name: 'VpSwitch',
    components: {
        VpInlineDesc,
    },
    props: {
        title: {
            type: String,
        },
        disabled: Boolean,
        value: {
            type: [Boolean, String, Number],
            default: false,
        },
        inlineDesc: [String, Boolean, Number],
        preventDefault: Boolean,
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
    computed: {
        labelStyle() {
            let isHTML = /<\/?[^>]*>/.test(this.title)
            let width = Math.min(isHTML ? 5 : this.title.length + 1, 14) + 'em'
            return cleanStyle({
                display: 'block',
                width: this.$parent.labelWidth || width,
                textAlign: this.$parent.labelAlign,
            })
        },
        labelClass() {
            return {
                'vp-cell-justify': this.$parent && this.$parent.labelAlign === 'justify',
            }
        },
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
        onClick() {
            this.$emit('on-click', !this.currentValue, this.currentValue)
        },
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

