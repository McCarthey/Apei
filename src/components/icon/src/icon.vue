<template>
    <i :class="[className, isMsg ? 'vbase-icon_msg' : '']" />
</template>

<script>
	export default {
		name: 'VpIcon',
		props: {
			type: String,
			isMsg: Boolean,
		},
		computed: {
			className() {
				// compatible with old type param
				return `vbase-icon vbase-icon_${this.type} vbase-icon-${this.type.replace(/_/g, '-')}`
			},
		},
	}
</script>

<style lang="less">
	@import '../../../styles/vbase/icon/vbase-icon_font';

	/**
	following styles will be removed after v3.0.0
	*/
	.icon-big:before {
		font-size: 93px;
	}
</style>
