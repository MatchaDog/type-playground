import { Alike, Expect } from 'utils'

declare const a: Chainable

const result1 = a
    .option('foo', 123)
    .option('bar', { value: 'Hello World' })
    .option('name', 'type-challenges')
    .get()

const result2 = a
    .option('name', 'another name')
    // @ts-expect-error
    .option('name', 'last name')
    .get()

type cases = [
    Expect<Alike<typeof result1, Expected1>>,
    Expect<Alike<typeof result2, Expected2>>,
]

type Expected1 = {
    foo: number
    bar: {
        value: string
    }
    name: string
}

type Expected2 = {
    name: string
}

type Chainable<T = {}> = {
    option<K extends string, V = unknown>(
        key: K extends keyof T ? never : K,
        value: V,
    ): Chainable<Record<K, V> & T>
    get(): T
}

// 链式调用 option 时都需要返回 Chainable
