<template>
    <i :class="[className, isMsg ? 'vbase-icon_msg' : '']"></i>
</template>

<script>
export default {
    name: "icon",
    props: {
        type: String,
        isMsg: Boolean
    },
    computed: {
        className() {
            // compatible with old type param
            return `vbase-icon vbase_icon_${this.type} vbase-icon-${this.type.replace(
                /_/g,
                "-"
            )}`;
        }
    }
};
</script>

<style lang="less">
	@import "../../../styles/vbase/icon/vbase_icon_font";

	/**
	following styles will be removed after v3.0.0
	*/
	.icon-big:before {
		font-size: 93px;
	}
</style>
