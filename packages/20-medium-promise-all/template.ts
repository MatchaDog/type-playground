import { Equal, Expect } from 'utils'

const promiseAllTest1 = PromiseAll([1, 2, 3] as const)
const promiseAllTest2 = PromiseAll([1, 2, Promise.resolve(3)] as const)
const promiseAllTest3 = PromiseAll([1, 2, Promise.resolve(3)])

type cases = [
    Expect<Equal<typeof promiseAllTest1, Promise<[1, 2, 3]>>>,
    Expect<Equal<typeof promiseAllTest2, Promise<[1, 2, number]>>>,
    Expect<Equal<typeof promiseAllTest3, Promise<[number, number, number]>>>,
]

declare function PromiseAll<T extends any[]>(
    values: readonly [...T],
): Promise<{
    [K in keyof T]: Await<T[K]>
}>

type Await<T> = T extends Promise<infer J> ? J : T

// 基于 readonly 构建 const []
// 基于 ... 构建多类型元组
// 基于 keyof 构建 元组
// 构造 Await 函数来获取Promise<T> 中的 T