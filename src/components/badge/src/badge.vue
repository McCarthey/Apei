<template>
    <span
        v-text="text"
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
    name: "badge",
    props: {
        text: [String, Number]
    }
};
</script>

<style lang="less">
	@import "../../styles/variable.less";

	.vvpay-badge {
		display: inline-block;
		text-align: center;
		background: @badge-bg-color;
		color: #fff;
		font-size: 12px;
		height: 16px;
		line-height: 16px;
		border-radius: 8px;
		padding: 0 6px;
		background-clip: padding-box;
		vertical-align: middle;
	}
	.vvpay-badge-single {
		padding: 0;
		width: 16px;
	}
	.vvpay-badge-dot {
		height: auto;
		padding: 5px;
	}
</style>
