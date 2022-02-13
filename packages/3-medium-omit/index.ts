import { Equal, Expect } from 'utils'

type cases = [
    Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
    Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

interface Todo {
    title: string
    description: string
    completed: boolean
}

interface Expected1 {
    title: string
    completed: boolean
}

interface Expected2 {
    title: string
}

type MyOmit<P, T extends keyof P> = {
    [index in Exclude<keyof P, T>]: P[index]
}
