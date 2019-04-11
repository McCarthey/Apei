<template>
    <button
        :style="buttonStyle"
        class="vbase-btn"
        :class="classes"
        :disabled="disabled"
        :type="actionType"
        @click="onClick"
    >
        <i class="vbase-loading" v-if="showLoading"></i>
        <slot>{{ text }}</slot>
    </button>
</template>

<script>
import { go } from "../../../libs/router";

export default {
    name: "v-button",
    props: {
        type: {
            default: "default"
        },
        disabled: Boolean,
        mini: Boolean,
        plain: Boolean,
        text: String,
        actionType: String,
        showLoading: Boolean,
        link: [String, Object],
        gradients: {
            type: Array,
            validator: function(val) {
                return val.length === 2;
            }
        }
    },
    methods: {
        onClick() {
            !this.disabled && go(this.link, this.$router);
        }
    },
    computed: {
        noBorder() {
            return Array.isArray(this.gradients);
        },
        buttonStyle() {
            if (this.gradients) {
                return {
                    background: `linear-gradient(90deg, ${this.gradients[0]}, ${
                        this.gradients[1]
                    })`,
                    color: "#FFFFFF"
                };
            }
        },
        classes() {
            return [
                {
                    "vbase-btn_disabled": !this.plain && this.disabled,
                    "vbase-btn_plain-disabled": this.plain && this.disabled,
                    "vbase-btn_mini": this.mini,
                    "vvpay-x-button-no-border": this.noBorder
                },
                !this.plain ? `vbase-btn_${this.type}` : "",
                this.plain ? `vbase-btn_plain-${this.type}` : "",
                this.showLoading ? `vbase-btn_loading` : ""
            ];
        }
    }
};
</script>

<style lang="less">
	@import "../../../styles/vbase/widget/vbase-button/vbase-button.less";
	@import "../../../styles/vbase/widget/vbase-loading/vbase-loading.less";

	.vbase-btn.vvpay-x-button-no-border:after {
		display: none;
	}
</style>
