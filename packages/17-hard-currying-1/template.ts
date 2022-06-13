import { Equal, Expect } from 'utils'

const curried1 = Currying((a: string, b: number, c: boolean) => true)
const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true)

type cases = [
  Expect<Equal<
    typeof curried1, (a: string) => (b: number) => (c: boolean) => true
  >>,
  Expect<Equal<
    typeof curried2, (a: string) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
  >>,
]


declare function Currying<T>(fn: T): T extends (...args: infer P )=> infer R 
? P extends [infer I, ...infer J] 
  ? ((args: I) => ReturnType<typeof Currying<(...args:J) => R>>) 
  : R
:never

// 考 infer 递归 restParameters 的组合用法