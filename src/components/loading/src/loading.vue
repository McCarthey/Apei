<template>
    <transition :name="transition">
        <div
            class="vbase-loading_toast vvpay-loading"
            :class="!text ? 'vvpay-loading-no-text' : ''"
            v-show="show"
        >
            <div class="vbase-mask_transparent"></div>
            <div
                class="vbase-toast"
                :style="{
                    position: position
                }"
            >
                <i class="vbase-loading vbase-icon_toast"></i>
                <p class="vbase-toast__content" v-if="text">
                    {{ text || "loading" }}<slot></slot>
                </p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "loading",
    model: {
        prop: "show",
        event: "change"
    },
    props: {
        show: Boolean,
        text: String,
        position: String,
        transition: {
            type: String,
            default: "vvpay-mask"
        }
    },
    watch: {
        show(val) {
            this.$emit("update:show", val);
        }
    }
};
</script>

<style lang="less">
	@import "../../../styles/vbase/widget/vbase_tips/vbase_mask";
	@import "../../../styles/vbase/widget/vbase_tips/vbase_toast";
	@import "../../../styles/vbase/widget/vbase-loading/vbase-loading.less";

	.vvpay-loading .vbase-toast {
		z-index: @loading-z-index;
	}
	.vbase-icon_toast.vbase-loading {
		margin: 30px 0 0;
		width: 38px;
		height: 38px;
		vertical-align: baseline;
		display: inline-block;
	}
	.vvpay-mask-enter,
	.vvpay-mask-leave-active,
	.vvpay-mask-leave-active,
	.vvpay-mask-enter-active {
		position: relative;
		z-index: 1;
	}
	.vvpay-mask-enter,
	.vvpay-mask-leave-active {
		opacity: 0;
	}
	.vvpay-mask-leave-active,
	.vvpay-mask-enter-active {
		transition: opacity 300ms;
	}
	.vvpay-loading-no-text .vbase-toast {
		min-height: 98px;
	}
</style>
