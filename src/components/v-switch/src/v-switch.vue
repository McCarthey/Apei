<template>
    <div class="vvpay-x-switch vbase-cell vbase-cell_switch">
        <div class="vbase-cell__bd">
            <label
                class="vbase-label"
                :style="labelStyle"
                :class="labelClass"
                v-html="title"
            ></label>
            <inline-desc v-if="inlineDesc">{{ inlineDesc }}</inline-desc>
        </div>
        <div class="vbase-cell__ft">
            <input
                class="vbase-switch"
                type="checkbox"
                :disabled="disabled"
                v-model="currentValue"
            />
            <div
                v-if="preventDefault"
                class="vvpay-x-switch-overlay"
                @click="onClick"
            ></div>
        </div>
    </div>
</template>

<script>
import InlineDesc from "@/components/inline-desc";
import cleanStyle from "@/libs/clean-style";

export default {
    name: "v-switch",
    components: {
        InlineDesc
    },
    computed: {
        labelStyle() {
            let isHTML = /<\/?[^>]*>/.test(this.title);
            let width = Math.min(isHTML ? 5 : this.title.length + 1, 14) + "em";
            return cleanStyle({
                display: "block",
                width: this.$parent.labelWidth || width,
                textAlign: this.$parent.labelAlign
            });
        },
        labelClass() {
            return {
                "vvpay-cell-justify":
						this.$parent && this.$parent.labelAlign === "justify"
            };
        }
    },
    methods: {
        onClick() {
            this.$emit("on-click", !this.currentValue, this.currentValue);
        },
        toBoolean(val) {
            if (!this.valueMap) {
                return val;
            } else {
                const index = this.valueMap.indexOf(val);
                return index === 1;
            }
        },
        toRaw(val) {
            if (!this.valueMap) {
                return val;
            } else {
                return this.valueMap[val ? 1 : 0];
            }
        }
    },
    props: {
        title: {
            type: String,
            required: true
        },
        disabled: Boolean,
        value: {
            type: [Boolean, String, Number],
            default: false
        },
        inlineDesc: [String, Boolean, Number],
        preventDefault: Boolean,
        valueMap: {
            type: Array,
            default: () => [false, true]
        }
    },
    data() {
        return {
            currentValue: this.toBoolean(this.value)
        };
    },
    watch: {
        currentValue(val) {
            const rawValue = this.toRaw(val);
            this.$emit("input", rawValue);
            this.$emit("on-change", rawValue);
        },
        value(val) {
            this.currentValue = this.toBoolean(val);
        }
    }
};
</script>

<style lang="less">
	@import "../../inline-v-switch/src/style.less";
</style>

