import { Equal, Expect } from 'utils'

type cases = [
    Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
    Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
    readonly title: string
    description: string
    completed: boolean
}

interface Todo2 {
    readonly title: string
    readonly description: string
    completed?: boolean
}

type GetReadonlyKeys<T> = keyof {
    [index in keyof T as Equal<
        { [i in index]: T[i] },
        { readonly [j in index]: T[j] }
    > extends true
        ? index
        : never]: never
}
