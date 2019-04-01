<template>
    <div>
        <button class="weui-btn weui-btn_mini weui-btn_primary">
            <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    name: 'ApButton',
}
</script>

<style lang="less">
@import '../../styles/weui/widget/weui-button/weui-button.less';
</style>
