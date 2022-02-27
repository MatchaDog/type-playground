import { Equal, Expect } from 'utils'

type cases = [
    Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>,
]

type TupleToUnion<T extends any[]> = T[number]

// 元组改集合
