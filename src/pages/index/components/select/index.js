import { Mask } from "../mask"

export const Select = {
    components: { Mask },
    props: { value:{}, 
        placeholder: {
            type: String,
            default: '请选择'
        }
    },
    data () {
        return {
            show: false,
            localValue: this.value
        }
    },
    methods: {
        childrenClick (val, label) {
            this.$emit('input', val)
            this.localValue = label
            this.show = false
        },
        showMask () {
            const rect = this.$refs.lSelect.getBoundingClientRect()
            console.log('rect', rect);
            const { style } = this.$refs.lOptionsContainer
            style.top = rect.bottom + 'px'
            style.left = rect.left + 'px'
            style.width = rect.right - rect.left + 'px'
            this.show = true
        },
        hiddenMask () {
            this.show = false
        },
        getLabel (val) {
            const options = this.$slots.default ?? []
            for(const opt of options) {
                if(val === opt.componentInstance.value) {
                    return opt.componentInstance.label || opt.componentInstance.$slots.default[0].text
                }
            }
            return val
        },
    },
    mounted () {
        this.$nextTick(() => {
            this.localValue = this.getLabel(this.value)
        })
    },
    render () {
        return <div class="l-select" onClick={this.showMask} ref="lSelect">
            <div class="l-select__value">{this.localValue || <span class="l-placeholder">{this.placeholder}</span>}</div>
            <Mask onClick={this.hiddenMask} show={this.show}>
                <div class='l-select__options' ref="lOptionsContainer">{this.$slots.default}</div>
            </Mask>
        </div>
    }
}

export const Option = {
    props: ['value', 'label'],
    methods: {
        click () {
            this.$parent.$parent.childrenClick(
                this.value ?? this.label ?? this.$slots.default[0].text,
                this.label ?? this.$slots.default[0].text
            )
        }
    },
    render () {
        return <div class="l-option" onClick={this.click}>{this.label ?? this.$slots.default}</div>
    }
}