import { Equal, Expect } from 'utils'

type cases = [
    Expect<Equal<Last<[3, 2, 1]>, 1>>,
    Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]

type Last<T extends any[]> = T extends [...infer I, infer J] ? J : never

// 考点是 rest parameters 和 infer 的搭配使用
