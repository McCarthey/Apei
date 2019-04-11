<template>
    <transition :name="`vp-popup-animate-${position}`">
        <div
            v-show="show && !initialShow"
            :style="styles"
            class="vp-popup-dialog"
            :class="[`vp-popup-${position}`, show ? 'vp-popup-show' : '']"
        >
            <slot v-if="shouldRenderBody" />
        </div>
    </transition>
</template>

<script>
import Popup from './popup'
import dom from '../../../libs/dom'

export default {
    name: 'VpPopup',
    props: {
        value: Boolean,
        height: {
            type: String,
            default: 'auto',
        },
        width: {
            type: String,
            default: 'auto',
        },
        showMask: {
            type: Boolean,
            default: true,
        },
        isTransparent: Boolean,
        hideOnBlur: {
            type: Boolean,
            default: true,
        },
        position: {
            type: String,
            default: 'bottom',
        },
        maxHeight: String,
        popupStyle: Object,
        hideOnDeactivated: {
            type: Boolean,
            default: true,
        },
        shouldRerenderOnShow: {
            type: Boolean,
            default: false,
        },
        shouldScrollTopOnShow: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            layout: '',
            initialShow: true,
            hasFirstShow: false,
            shouldRenderBody: true,
            show: this.value,
        }
    },
    computed: {
        styles() {
            const styles = {}
            if (!this.position || this.position === 'bottom' || this.position === 'top') {
                styles.height = this.height
            } else {
                styles.width = this.width
            }

            if (this.maxHeight) {
                styles['max-height'] = this.maxHeight
            }

            this.isTransparent && (styles['background'] = 'transparent')
            if (this.popupStyle) {
                for (let i in this.popupStyle) {
                    styles[i] = this.popupStyle[i]
                }
            }
            return styles
        },
    },
    watch: {
        value(val) {
            this.show = val
        },
        show(val) {
            this.$emit('input', val)
            if (val) {
                if (this.shouldRerenderOnShow) {
                    this.shouldRenderBody = false
                    this.$nextTick(() => {
                        this.scrollTop()
                        this.shouldRenderBody = true
                        this.doShow()
                    })
                } else {
                    if (this.shouldScrollTopOnShow) {
                        this.scrollTop()
                    }
                    this.doShow()
                }
            } else {
                this.$emit('on-hide')
                this.show = false
                this.popup.hide(false)
                setTimeout(() => {
                    if (!document.querySelector('.vp-popup-dialog.vp-popup-show')) {
                        this.fixSafariOverflowScrolling('touch')
                    }
                    this.removeModalClassName()
                }, 200)
            }
        },
    },
    created() {
        // get global layout config
        if (this.$vp && this.$vp.config && this.$vp.config.$layout === 'VIEW_BOX') {
            this.layout = 'VIEW_BOX'
        }
    },
    mounted() {
        this.$overflowScrollingList = document.querySelectorAll('.vp-fix-safari-overflow-scrolling')
        this.$nextTick(() => {
            const _this = this
            this.popup = new Popup({
                showMask: _this.showMask,
                container: _this.$el,
                hideOnBlur: _this.hideOnBlur,
                onOpen() {
                    _this.fixSafariOverflowScrolling('auto')
                    _this.show = true
                },
                onClose() {
                    _this.show = false
                    if (window.__$vpPopups && Object.keys(window.__$vpPopups).length > 1) return
                    if (document.querySelector('.vp-popup-dialog.vp-popup-mask-disabled')) return
                    setTimeout(() => {
                        _this.fixSafariOverflowScrolling('touch')
                    }, 300)
                },
            })
            if (this.value) {
                this.popup.show()
            }
            this.initialShow = false
        })
    },
    deactivated() {
        if (this.hideOnDeactivated) {
            this.show = false
        }
        this.removeModalClassName()
    },
    beforeDestroy() {
        this.popup && this.popup.destroy()
        this.fixSafariOverflowScrolling('touch')
        this.removeModalClassName()
    },
    methods: {
        /**
			 * https://benfrain.com/z-index-stacking-contexts-experimental-css-and-ios-safari/
			 */
        fixSafariOverflowScrolling(type) {
            if (!this.$overflowScrollingList.length) return
            for (let i = 0; i < this.$overflowScrollingList.length; i++) {
                this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
            }
        },
        removeModalClassName() {
            this.layout === 'VIEW_BOX' && dom.removeClass(document.body, 'vp-modal-open')
        },
        doShow() {
            this.popup && this.popup.show()
            this.$emit('on-show')
            this.fixSafariOverflowScrolling('auto')
            this.layout === 'VIEW_BOX' && dom.addClass(document.body, 'vp-modal-open')
            if (!this.hasFirstShow) {
                this.$emit('on-first-show')
                this.hasFirstShow = true
            }
        },
        scrollTop() {
            this.$nextTick(() => {
                this.$el.scrollTop = 0
                const box = this.$el.querySelectorAll('.vp-scrollable')
                if (box.length) {
                    for (let i = 0; i < box.length; i++) {
                        box[i].scrollTop = 0
                    }
                }
            })
        },
    },
}
</script>

<style lang="less">
	@import '../../../styles/variable.less';
	@import '../../../styles/vp-modal.css';

	.vp-popup-dialog {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		background: @popup-background-color;
		z-index: 501;
		transition-property: transform;
		transition-duration: 300ms;
		max-height: 100%;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
	}
	.vp-popup-dialog.vp-popup-left {
		width: auto;
		height: 100%;
		top: 0;
		right: auto;
		bottom: auto;
		left: 0;
	}
	.vp-popup-dialog.vp-popup-right {
		width: auto;
		height: 100%;
		top: 0;
		right: 0;
		bottom: auto;
		left: auto;
	}
	.vp-popup-dialog.vp-popup-top {
		width: 100%;
		top: 0;
		right: auto;
		bottom: auto;
		left: 0;
	}
	.vp-popup-mask {
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5);
		opacity: 0;
		tap-highlight-color: rgba(0, 0, 0, 0);
		z-index: -1;
		transition: opacity 400ms;
	}
	.vp-popup-mask.vp-popup-show {
		opacity: 1;
	}

	.vp-popup-animate-bottom-enter,
	.vp-popup-animate-bottom-leave-active {
		transform: translate3d(0, 100%, 0);
	}

	.vp-popup-animate-left-enter,
	.vp-popup-animate-left-leave-active {
		transform: translate3d(-100%, 0, 0);
	}

	.vp-popup-animate-right-enter,
	.vp-popup-animate-right-leave-active {
		transform: translate3d(100%, 0, 0);
	}

	.vp-popup-animate-top-enter,
	.vp-popup-animate-top-leave-active {
		transform: translate3d(0, -100%, 0);
	}
</style>
