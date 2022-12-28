export const Button = {
    props:['deep'],
    methods: {
        click (e) {
            this.$emit('click', e)
        }
    },
    render () {
        return <div class={{
                'l-deep': this.deep,
                'l-button': true
            }}
            onClick={this.click}
        >{this.$slots.default}</div>
    }
}