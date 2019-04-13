<template>
    <div class="vbase-cells__title">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "group-title"
};
</script>

<style lang="less">
	@import "../../../styles/vbase/widget/vbase_cell/vbase_access";
	@import "../../../styles/vbase/widget/vbase_cell/vbase_cell_global";
</style>