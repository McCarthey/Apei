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
                <!-- <i class="vbase-loading vbase-icon_toast"></i> -->
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
        width: 9.6em;
        top: 40%;
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
	.vvpay-loading .vbase-toast {
        min-height: 60px;
        border-radius: 8px;
    }
    .vbase-loading_toast .vbase-toast__content{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 10px 0 0 0;
    }
    .vvpay-loading-text-dot{
        font-size: 20px;
        margin-left: 3px;
    }
</style>
