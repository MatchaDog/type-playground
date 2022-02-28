import { Equal, Expect } from 'utils'

type cases = [
    Expect<Equal<First<[3, 2, 1]>, 3>>,
    Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
    Expect<Equal<First<[]>, never>>,
    Expect<Equal<First<[undefined]>, undefined>>,
]

type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// 考点在于访问 'length' 判断数组长度