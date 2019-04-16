<template>
    <div class="triple-bounce">
        <div class="bounce1" :style="bounceStyle"></div>
        <div class="bounce2" :style="bounceStyle"></div>
        <div class="bounce3" :style="bounceStyle"></div>
    </div>
</template>

<script>
export default {
    name: "triple-bounce",
    props: {
        size: Number,
        color: String
    },
    computed: {
        spinnerColor() {
            return this.color || this.$parent.color || "#ccc";
        },
        spinnerSize() {
            return (this.size || this.$parent.size || 28) / 3 + "px";
        },
        bounceStyle() {
            return {
                width: this.spinnerSize,
                height: this.spinnerSize,
                backgroundColor: this.spinnerColor
            };
        }
    }
};
</script>

<style lang="less">
	.triple-bounce {
		margin-top: -70px;
		padding-bottom: 10px;
		.bounce1,
		.bounce2,
		.bounce3 {
			border-radius: 100%;
			display: inline-block;
			animation: mint-spinner-triple-bounce 1.4s infinite ease-in-out both;
		}
		.bounce1 {
			animation-delay: -0.32s;
		}
		.bounce2 {
			animation-delay: -0.16s;
		}
	}

	@keyframes mint-spinner-triple-bounce {
		0%,
		80%,
		100% {
			transform: scale(0);
		}
		40% {
			transform: scale(1);
		}
	}
</style>