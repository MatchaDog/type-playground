import { Alike, Equal, Expect } from 'utils'

type cases = [
    Expect<Alike<MyReadonly2<Todo1>, Readonly<Todo1>>>,
    Expect<Alike<MyReadonly2<Todo1, 'title' | 'description'>, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, 'title' | 'description'>, Expected>>,
]

interface Todo1 {
    title: string
    description?: string
    completed: boolean
}

interface Todo2 {
    readonly title: string
    description?: string
    completed: boolean
}

interface Expected {
    readonly title: string
    readonly description?: string
    completed: boolean
}

type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [index in K]: T[index]
} & {
    [index in Exclude<keyof T, K>]: T[index]
}

// 不存在 K 的场景 提供默认值
// 部分签名为 readonly 的场景