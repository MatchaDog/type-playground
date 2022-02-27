import { Equal, Expect } from 'utils'

type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>]

interface Todo1 {
    title: string
    description: string
    completed: boolean
    meta: {
        author: string
    }
}

type MyReadonly<T> = {
    readonly [K in keyof T]: T[K]
}
