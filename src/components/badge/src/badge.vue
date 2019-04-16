<template>
    <span
        v-text="max ? renderText :text"  
        :class="[
            'vvpay-badge',
            {
                'vvpay-badge-dot': typeof text === 'undefined',
                'vvpay-badge-single':
                    typeof text !== 'undefined' && text.toString().length === 1
            }
        ]"
    ></span>
</template>

<script>
export default {
   	name: 'badge',
    props: {
        text: [String, Number],
        max: [String, Number],
    },
    computed: {
        renderText() {
            const text = Number(this.text)
            const max = Number(this.max)
            if (Number.isNaN(text) || Number.isNaN(max)) return this.text
            return text <= max ? text : `${max}+`
        },
    },
};
</script>

<style lang="less">
	@import "../../../styles/variable.less";

	.vvpay-badge {
		display: inline-block;
		text-align: center;
		background: @badge-bg-color;
		color: #fff;
		font-size: 34px;
		height: 46px;
		line-height: 46px;
		border-radius: 23px;
		padding: 0 18px;
		background-clip: padding-box;
		vertical-align: middle;
	}
	.vvpay-badge-single {
		padding: 0;
		width: 46px;
	}
	.vvpay-badge-dot {
		height: auto;
		padding: 14px;
	}
</style>
