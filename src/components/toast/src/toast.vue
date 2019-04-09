<template>
    <div class="vp-toast">
        <div
            v-show="isShowMask && show"
            class="vbase-mask_transparent"
        />
        <transition :name="currentTransition">
            <div
                v-show="show"
                class="vbase-toast"
                :style="{ width: width }"
                :class="toastClass"
            >
                <i
                    v-show="type !== 'text'"
                    class="vbase-icon-success-no-circle vbase-icon_toast"
                />
                <p
                    v-if="text"
                    class="vbase-toast__content"
                    :style="style"
                >
                    {{ text }}
                </p>
                <p
                    v-else
                    class="vbase-toast__content"
                    :style="style"
                >
                    <slot />
                </p>
            </div>
        </transition>
    </div>
</template>

<script>
	import SafariFixIssue from '../../../mixins/safari-fix'

	export default {
		name: 'VpToast',
		mixins: [SafariFixIssue],
		props: {
			value: Boolean,
			time: {
				type: Number,
				default: 2000,
			},
			type: {
				type: String,
				default: 'success',
			},
			transition: String,
			width: {
				type: String,
				default: '7.6em',
			},
			isShowMask: {
				type: Boolean,
				default: false,
			},
			text: String,
			position: String,
		},
		data() {
			return {
				show: false,
			}
		},
		computed: {
			currentTransition() {
				if (this.transition) {
					return this.transition
				}
				if (this.position === 'top') {
					return 'vp-slide-from-top'
				}
				if (this.position === 'bottom') {
					return 'vp-slide-from-bottom'
				}
				return 'vp-fade'
			},
			toastClass() {
				return {
					'vbase-toast_forbidden': this.type === 'warn',
					'vbase-toast_cancel': this.type === 'cancel',
					'vbase-toast_success': this.type === 'success',
					'vbase-toast_text': this.type === 'text',
					'vp-toast-top': this.position === 'top',
					'vp-toast-bottom': this.position === 'bottom',
					'vp-toast-middle': this.position === 'middle',
				}
			},
			style() {
				if (this.type === 'text' && this.width === 'auto') {
					return { padding: '10px' }
				}
			},
		},
		watch: {
			show(val) {
				if (val) {
					this.$emit('input', true)
					this.$emit('on-show')
					this.fixSafariOverflowScrolling('auto')

					clearTimeout(this.timeout)
					this.timeout = setTimeout(() => {
						this.show = false
						this.$emit('input', false)
						this.$emit('on-hide')
						this.fixSafariOverflowScrolling('touch')
					}, this.time)
				}
			},
			value(val) {
				this.show = val
			},
		},
		created() {
			if (this.value) {
				this.show = true
			}
		},
	}
</script>

<style lang="less">
    @import '../../../styles/variable.less';
	@import '../../../styles/transition.less';
	@import '../../../styles/vbase/widget/vbase-tips/vbase-mask.less';
	@import '../../../styles/vbase/icon/vbase-icon_font';
	@import '../../../styles/vbase/widget/vbase-tips/vbase-toast.less';

	.vbase-toast.vp-toast-top {
		top: @toast-position-top-offset;
	}
	.vbase-toast.vp-toast-bottom {
		top: auto;
		bottom: @toast-position-bottom-offset;
		transform: translateX(-50%);
	}
	.vbase-toast.vp-toast-middle {
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
	}
	.vp-slide-from-top-enter,
	.vp-slide-from-top-leave-active {
		opacity: 0;
		transform: translateX(-50%) translateY(-100%) !important;
	}
	.vp-slide-from-bottom-enter,
	.vp-slide-from-bottom-leave-active {
		opacity: 0;
		transform: translateX(-50%) translateY(100%) !important;
	}
	.vp-slide-from-top-enter-active,
	.vp-slide-from-top-leave-active,
	.vp-slide-from-bottom-enter-active,
	.vp-slide-from-bottom-leave-active {
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
		content: '\EA08';
	}
	.vbase-toast_cancel .vbase-icon_toast:before {
		content: '\EA0D';
	}
	.vbase-toast_forbidden .vbase-icon_toast.vbase-icon-success-no-circle:before {
		content: '\EA0B';
		color: #f76260;
	}
</style>
