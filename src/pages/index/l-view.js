import * as components from './components'
const prefix = 'L'
export class LView {
    static install (Vue) {
        for(const name in components) {
            Vue.component(`${prefix}${name}`, components[name])
        }
    }
}