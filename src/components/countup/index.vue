<script>
/**
 * vp-countup
 * @module components/countup
 * @desc countup.js(v2版，与v1版本有较大出入，具体参见其源码)的封装组件
 * @param {string} [tag] 可选，要展示的元素，默认span
 * @param {boolean} [start] 可选，是否立即开始
 * @param {number} [startVal] 可选，起始数值
 * @param {number} [endVal] 必填，结束数值
 * @param {number} [decimals] 可选，保留小数位数
 * @param {number} [duration] 可选，持续时间
 * @example
 *  <vp-countup
        tag="div"
        :start-val="1"
        :end-val="1388"
        :duration="2"
        class="demo-count"
    />
    <br>
    <vp-countup
        :end-val="88.88"
        :duration="3"
        :decimals="2"
        :start="startCount"
        class="demo-count"
    />
 */
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
        decimals: {
            type: Number,
            default: 0,
        },
        duration: {
            type: Number,
            default: 2,
        },
        onComplete: {
            type: Function
        }
    },
    watch: {
        start(val) {
            if (val) {
                this._countup.start(this.onComplete)
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
                this._countup.start(this.onComplete)
            }
        })
    },
    render(h) {
        return h(this.tag, {}, [this.startVal])
    },
}
</script>
