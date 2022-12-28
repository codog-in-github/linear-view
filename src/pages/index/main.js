import './main.scss'
import Vue from 'vue'
import { LView } from './l-view'

Vue.use(LView)

const vm = new Vue({
    data () {
        return {
            opt: [
                { label: '黑桃三♠️', value: 1 },
                { label: '红桃三♥️', value: 2 },
                { label: '方片三♦️', value: 3 },
                { label: '草花三♣️', value: 4 },
                { label: '胡汉三👴', value: 5 },
            ]
        }
    },
    render () {
        return <div>
            <div>
                <div class="title">按钮（button）</div>
                <LButton>按钮</LButton>
                <LButton deep>深色按钮</LButton>
            </div>
            <div>
                <div class="title">输入框（input）</div>
                <LInput placeholder="顶顶顶"></LInput>
                <LInput textarea></LInput>
            </div>
            <div>
                <div class="title">选择器（select）</div>
                <LSelect>{this.opt.map(item =>
                    <LOption key={item.value} value={item.value}>{item.label}</LOption>
                )}</LSelect>
            </div>
            <div><a href='https://github.com/codog-in-github/linear-view'>源代码</a></div>
        </div>
    }
})

vm.$mount('#app')