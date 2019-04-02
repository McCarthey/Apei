<script>
import { CountUp } from 'countup.js'

export default {
    name: 'VpCountup',
    props: {
        tag: {
            type: String,
            default: 'span',
        },
        start: {
            type: Boolean,
            default: true,
        },
        startVal: {
            type: Number,
            default: 0,
        },
        endVal: {
            type: Number,
            required: true,
        },
        // number of decimal places in number
        decimals: {
            type: Number,
            default: 0,
        },
        // duration in seconds
        duration: {
            type: Number,
            default: 2,
        },
    },
    watch: {
        start(val) {
            if (val) {
                this._countup.start()
            }
        },
        endVal(val) {
            this._countup.update(val)
        },
    },
    mounted() {
        this.$nextTick(() => {
            this._countup = new CountUp(this.$el, this.endVal, {
                startVal: this.startVal,
                decimalPlaces: this.decimals,
                duration: this.duration,
            })
            if (this.start) {
                this._countup.start()
            }
        })
    },
    render(h) {
        return h(this.tag, {}, [this.startVal])
    },
}
</script>
