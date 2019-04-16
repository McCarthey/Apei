<template>
    <div>
        <div
            class="vbase-cells__title"
            v-if="title"
            :style="
                cleanStyle({
                    color: titleColor
                })
            "
            v-html="title"
        ></div>
        <slot name="title"></slot>
        <div
            class="vbase-cells"
            :class="{
                'vvpay-no-group-title': !title
            }"
            :style="
                cleanStyle({
                    marginTop: typeof gutter === 'number' ? gutter + 'px' : gutter
                })
            "
        >
            <slot name="after-title"></slot>
            <slot></slot>
        </div>
        <div
            class="vbase-cells__title vvpay-group-footer-title"
            v-if="footerTitle"
            :style="
                cleanStyle({
                    color: footerTitleColor
                })
            "
            v-html="footerTitle"
        ></div>
    </div>
</template>

<script>
import cleanStyle from "@/libs/clean-style";

export default {
    name: "group",
    methods: {
        cleanStyle
    },
    props: {
        title: String,
        titleColor: String,
        labelWidth: String,
        labelAlign: String,
        labelMarginRight: String,
        gutter: [String, Number],
        footerTitle: String,
        footerTitleColor: String
    }
};
</script>

<style lang="less">
	@import "../../../styles/vbase/widget/vbase_cell/vbase_access";
	@import "../../../styles/vbase/widget/vbase_cell/vbase_cell_global";
	@import "../../../styles/blank.less";

	.vvpay-no-group-title {
		margin-top: @group-title-margin-top;
	}

	.vvpay-group-footer-title.vbase-cells__title {
		margin-top: @group-footer-title-margin-top;
		margin-bottom: @group-footer-title-margin-bottom;
		padding-top: 0;
		font-size: 36px;
	}

	/* global config for group items */
	.vvpay-cell-value {
		color: @cell-value-color;
	}
	.vvpay-cell-placeholder {
		color: @cell-placeholder-color;
	}
</style>
