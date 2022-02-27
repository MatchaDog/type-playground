import { Equal, Expect } from 'utils'

SimpleVue({
    data() {
        // @ts-expect-error
        this.firstname
        // @ts-expect-error
        this.getRandom()
        // @ts-expect-error
        this.data()

        return {
            firstname: 'Type',
            lastname: 'Challenges',
            amount: 10,
        }
    },
    computed: {
        fullname() {
            return `${this.firstname} ${this.lastname}`
        },
    },
    methods: {
        getRandom() {
            return Math.random()
        },
        hi() {
            alert(this.amount)
            alert(this.fullname.toLowerCase())
            alert(this.getRandom())
        },
        test() {
            const fullname = this.fullname
            const cases: [Expect<Equal<typeof fullname, string>>] = [] as any
        },
    },
})

declare function SimpleVue<D, C, M>(options: {
    data: (this: {}) => D
    computed: C & ThisType<D>
    methods: M &
        ThisType<
            D &
                M & {
                    [K in keyof C]: C[K] extends (...args: any[]) => infer R
                        ? R
                        : never
                }
        >
}): any

// Vue 中的 data, methods, computed 里都可以直接访问 this,
// 这道题的考点就是利用 ThisType 拼接三个作用域里的 this
// https://www.typescriptlang.org/docs/handbook/utility-types.html#thistypetype
