import { Equal, Expect } from 'utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type cases = [
    Expect<
        Equal<
            TupleToObject<typeof tuple>,
            {
                tesla: 'tesla'
                'model 3': 'model 3'
                'model X': 'model X'
                'model Y': 'model Y'
            }
        >
    >,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

type TupleToObject<T extends readonly any[]> = {
    [K in T[number]]: K
}

// 元组转对象