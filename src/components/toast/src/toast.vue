<template>
    <div class="vvpay-toast">
        <div class="vbase-mask_transparent" v-show="isShowMask && show"></div>
        <transition :name="currentTransition">
            <div
                class="vbase-toast"
                :style="{ width: width }"
                :class="toastClass"
                v-show="show"
            >
                <i
                    class="vbase-icon-success-no-circle vbase-icon_toast"
                    v-show="type !== 'text'"
                ></i>
                <p
                    class="vbase-toast__content"
                    v-if="text"
                    :style="style"
                >{{text}}</p>
                <p class="vbase-toast__content" v-else :style="style">
                    <slot></slot>
                </p>
            </div>
        </transition>
    </div>
</template>

<script>
import SafariFixIssue from "@/mixins/safari-fix";

export default {
    name: "toast",
    mixins: [SafariFixIssue],
    props: {
        value: Boolean,
        time: {
            type: Number,
            default: 2000
        },
        type: {
            type: String,
            default: "success"
        },
        transition: String,
        width: {
            type: String,
            default: "7.6em"
        },
        isShowMask: {
            type: Boolean,
            default: false
        },
        text: String,
        position: String
    },
    data() {
        return {
            show: false
        };
    },
    created() {
        if (this.value) {
            this.show = true;
        }
    },
    computed: {
        currentTransition() {
            if (this.transition) {
                return this.transition;
            }
            if (this.position === "top") {
                return "vvpay-slide-from-top";
            }
            if (this.position === "bottom") {
                return "vvpay-slide-from-bottom";
            }
            return "vvpay-fade";
        },
        toastClass() {
            return {
                "vbase-toast_forbidden": this.type === "warn",
                "vbase-toast_cancel": this.type === "cancel",
                "vbase-toast_success": this.type === "success",
                "vbase-toast_text": this.type === "text",
                "vvpay-toast-top": this.position === "top",
                "vvpay-toast-bottom": this.position === "bottom",
                "vvpay-toast-middle": this.position === "middle"
            };
        },
        style() {
            if (this.type === "text" && this.width === "auto") {
                return { padding: "10px" };
            }
        }
    },
    watch: {
        show(val) {
            if (val) {
                this.$emit("input", true);
                this.$emit("on-show");
                this.fixSafariOverflowScrolling("auto");

                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.show = false;
                    this.$emit("input", false);
                    this.$emit("on-hide");
                    this.fixSafariOverflowScrolling("touch");
                }, this.time);
            }
        },
        value(val) {
            this.show = val;
        }
    }
};
</script>

<style lang="less">
	@import "../../../styles/transition.less";
	@import "../../../styles/vbase/widget/vbase_tips/vbase_mask";
	@import "../../../styles/vbase/icon/vbase_icon_font";
	@import "../../../styles/vbase/widget/vbase_tips/vbase_toast";

	.vbase-toast.vvpay-toast-top {
		top: @toast-position-top-offset;
	}
	.vbase-toast.vvpay-toast-bottom {
		top: auto;
		bottom: @toast-position-bottom-offset;
		transform: translateX(-50%);
	}
	.vbase-toast.vvpay-toast-middle {
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.vvpay-slide-from-top-enter,
	.vvpay-slide-from-top-leave-active {
		opacity: 0;
		transform: translateX(-50%) translateY(-100%) !important;
	}
	.vvpay-slide-from-bottom-enter,
	.vvpay-slide-from-bottom-leave-active {
		opacity: 0;
		transform: translateX(-50%) translateY(100%) !important;
	}
	.vvpay-slide-from-top-enter-active,
	.vvpay-slide-from-top-leave-active,
	.vvpay-slide-from-bottom-enter-active,
	.vvpay-slide-from-bottom-leave-active {
		transition: all 400ms cubic-bezier(0.36, 0.66, 0.04, 1);
	}
	.vbase-toast {
		transform: translateX(-50%);
		margin-left: 0 !important;
	}
	.vbase-toast.vbase-toast_forbidden {
		color: #f76260;
	}
	.vbase-toast.vbase-toast_forbidden .vbase-toast__content {
		margin-top: 10px;
	}
	.vbase-toast.vbase-toast_text {
		min-height: 0;
	}
	.vbase-toast_text .vbase-toast__content {
		margin: 0;
		padding-top: 10px;
		padding-bottom: 10px;
		border-radius: 15px;
	}
	.vbase-toast__content {
		font-size: @toast-content-font-size;
	}
	.vbase-loading_toast .vbase-toast__content {
		margin-top: 0;
	}
	.vbase-toast_success .vbase-icon_toast:before {
		content: "\EA08";
	}
	.vbase-toast_cancel .vbase-icon_toast:before {
		content: "\EA0D";
	}
	.vbase-toast_forbidden .vbase-icon_toast.vbase-icon-success-no-circle:before {
		content: "\EA0B";
		color: #f76260;
	}
</style>
