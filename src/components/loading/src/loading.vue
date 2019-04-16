<template>
    <transition :name="transition">
        <div
            class="vbase-loading_toast vvpay-loading"
            v-show="show"
        >
            <div class="vbase-mask_transparent"></div>
            <div
                class="vbase-toast"
                :style="{
                    position: position
                }"
            >
                <div class="vvpay-loading-image"></div>
                <p class="vbase-toast__content vvpay__content">
                    {{ text || "加载中" }}<span class="vvpay-loading-text-dot" v-if="!text">···</span>
                </p>
                <triple-bounce></triple-bounce>
            </div>
        </div>
    </transition>
</template>

<script>
import TripleBounce from './triple-bounce'

export default {
    components: { TripleBounce },
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
        width: 396px;
        top: 40%;
        z-index: @loading-z-index;
    }
    .vvpay-loading .vvpay-loading-image{
        width: 300px;
        height: 60px;
        margin-top: 40px;
        margin-left: 48px;
        background: url('../../../styles/vbase/icon/vivo钱包.png') center no-repeat;
        background-size: 100%;
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
	.vvpay-loading .vbase-toast {
        min-height: 180px;
        border-radius: 24px;
    }
    .vbase-loading_toast .vbase-toast__content{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 0 0;
        font-size: 42px;
    }
    .vvpay-loading-text-dot{
        font-size: 60px;
        margin-left: 9px;
    }
</style>
