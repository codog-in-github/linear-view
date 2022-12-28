export const Mask = {
    props: {
        show: {
            type: Boolean,
            default: false
        },
        bgColor: {
            type: String,
            default: ''
        }
    },
    methods: {
        maskClick(e) {
            this.$emit('click', e)
            e.stopPropagation()
        }
    },
    render () {
        return <div class={{
                'l-mask': true,
                'l-hidden': !this.show
                }}
                style={{backgroundColor: this.bgColor}}
                onClick={this.maskClick}>
            <div class="l-mask__container" onClick={e => e.stopPropagation()}>{this.$slots.default}</div>
        </div>
    }
}