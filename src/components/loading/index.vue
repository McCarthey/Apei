<template>
    <transition :name="transition">
        <div
            v-show="show"
            class="vbase-loading_toast vp-loading"
            :class="!text ? 'vp-loading-no-text' : ''"
        >
            <div class="vbase-mask_transparent" />
            <div
                class="vbase-toast"
                :style="{
                    position: position,
                }"
            >
                <i class="vbase-loading vbase-icon_toast" />
                <p
                    v-if="text"
                    class="vbase-toast__content"
                >
                    {{ text || 'loading' }}<slot />
                </p>
            </div>
        </div>
    </transition>
</template>

<script>
	export default {
		name: 'VpLoading',
		model: {
			prop: 'show',
			event: 'change',
		},
		props: {
			show: Boolean,
			text: String,
			position: String,
			transition: {
				type: String,
				default: 'vp-mask',
			},
		},
		watch: {
			show(val) {
				this.$emit('update:show', val)
			},
		},
	}
</script>

<style lang="less">
    @import '../../styles/variable.less';
	@import '../../styles/vbase/widget/vbase-tips/vbase-mask.less';
	@import '../../styles/vbase/widget/vbase-tips/vbase-toast.less';
	@import '../../styles/vbase/widget/vbase-loading/vbase-loading.less';

	.vp-loading .vbase-toast {
		z-index: @loading-z-index;
	}
	.vbase-icon_toast.vbase-loading {
		margin: 30px 0 0;
		width: 38px;
		height: 38px;
		vertical-align: baseline;
		display: inline-block;
	}
	.vp-mask-enter,
	.vp-mask-leave-active,
	.vp-mask-leave-active,
	.vp-mask-enter-active {
		position: relative;
		z-index: 1;
	}
	.vp-mask-enter,
	.vp-mask-leave-active {
		opacity: 0;
	}
	.vp-mask-leave-active,
	.vp-mask-enter-active {
		transition: opacity 300ms;
	}
	.vp-loading-no-text .vbase-toast {
		min-height: 98px;
	}
</style>
