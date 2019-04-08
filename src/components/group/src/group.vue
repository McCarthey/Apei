<template>
    <div>
        <div
            v-if="title"
            class="vbase-cells__title"
            :style="
                cleanStyle({
                    color: titleColor,
                })
            "
        >
            {{ title }}
        </div>
        <slot name="title" />
        <div
            class="vbase-cells"
            :class="{
                'vp-no-group-title': !title,
            }"
            :style="
                cleanStyle({
                    marginTop: typeof gutter === 'number' ? gutter + 'px' : gutter,
                })
            "
        >
            <slot name="after-title" />
            <slot />
        </div>
        <div
            v-if="footerTitle"
            class="vbase-cells__title vp-group-footer-title"
            :style="
                cleanStyle({
                    color: footerTitleColor,
                })
            "
        >
            {{ footerTitle }}
        </div>
    </div>
</template>

<script>
	import cleanStyle from '../../../libs/clean-style'

	export default {
		name: 'VpGroup',
		props: {
			title: String,
			titleColor: String,
			labelWidth: String,
			labelAlign: String,
			labelMarginRight: String,
			gutter: [String, Number],
			footerTitle: String,
			footerTitleColor: String,
		},
		methods: {
			cleanStyle,
		},
	}
</script>

<style lang="less">
	@import '../../../styles/variable.less';
	@import '../../../styles/vbase/widget/vbase-cell/vbase-access';
	@import '../../../styles/vbase/widget/vbase-cell/vbase-cell_global';
	@import '../../../styles/blank.less';

	.vp-no-group-title {
		margin-top: @group-title-margin-top;
	}

	.vp-group-footer-title.vbase-cells__title {
		margin-top: @group-footer-title-margin-top;
		margin-bottom: @group-footer-title-margin-bottom;
		padding-top: 0;
		font-size: 12px;
	}

	/* global config for group items */
	.vp-cell-value {
		color: @cell-value-color;
	}
	.vp-cell-placeholder {
		color: @cell-placeholder-color;
	}
</style>
