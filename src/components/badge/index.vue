<template>
    <span
        :class="[
            'vp-badge',
            { 'vp-badge-dot': typeof text === 'undefined', 'vp-badge-single': typeof text !== 'undefined' && text.toString().length === 1 },
        ]"
        v-text="max ? renderText :text"
    />
</template>

<script>
export default {
    name: 'VpBadge',
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
}
</script>

<style lang="less">
@import '../../styles/variable.less';

.vp-badge {
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
.vp-badge-single {
    padding: 0;
    width: 16px;
}
.vp-badge-dot {
    height: auto;
    padding: 5px;
}
</style>
