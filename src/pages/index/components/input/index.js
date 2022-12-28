export const Input = {
    props: ['textarea', 'placeholder'],
    methods: {
        input(e) {

        }
    },
    render () {
        return <div class={{
            'l-input': true
        }} onClick={e => {
            this.$refs.input.focus()
            this.$emit('click', e)
        }}>{
            this.textarea
                ? <textarea ref="input" placeholder={this.placeholder} onInput={e => this.$emit('input', e)}></textarea> 
                : <input ref="input" placeholder={this.placeholder} onInput={e => this.$emit('input', e)} />
        }</div>
    },
    
}