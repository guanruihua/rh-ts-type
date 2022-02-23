import { Split } from './string'
// import { Every } from './array';
import { Not, Stringify, CheckLeftIsExtendsRight } from './index'
import { IntAddSingleHepler, IntMinusSingleAbsHelper } from './helper'

// 可分配给 NumberLike 的类型示例：number、`${number}`、1、-1、0.1、-0.1、"1"、"-1" 等
export type NumberLike = number | `${number}`

// N 意为 Number 数字
// number类型是否为0，判断 N 是否可分配给 0 | "0"
export type IsZero<N extends NumberLike> = CheckLeftIsExtendsRight<N, 0 | '0'>

// number类型是否大于0，泛型类型有限制 NumberLike，所以它一定是个数或者由数字构成的字符串，将其转为字符串后，判断最前面是不是 -，如果不是，就是大于零
export type IsOverZero<N extends NumberLike> = IsZero<N> extends true
  ? false
  : CheckLeftIsExtendsRight<
      Stringify<N> extends `${'-'}${infer Rest}` ? Rest : never,
      never
    >

// number类型是否小于0，对上面 IsOverZero 的结果取反
export type IsLessZero<N extends NumberLike> = Not<IsOverZero<N>>

// 是否为浮点型
/**
 * number类型是否是小数
 * @example
 * type Result = IsFloat<1.2> // true
 */
// export type IsFloat<
//   N extends NumberLike,
//   OnlyCheckPoint extends boolean = true
// > = Stringify<N> extends `${infer Left}${"."}${infer Right}`
//   ? OnlyCheckPoint extends true
//     ? true
//     : Not<Every<Split<Right>, "0">>
//   : false

// 是否为整型
/**
 * number类型是否是整数
 * @example
 * type Result = IsInt<1> // true
 */
// export type IsInt<
//   N extends NumberLike,
//   OnlyCheckPoint extends boolean = true
// > = Not<IsFloat<N, OnlyCheckPoint>>

// 正整数（和0）加法，T1，T2最大999
export type IntAddSingle<
  N1 extends number,
  N2 extends number
> = IntAddSingleHepler<N1, N2> extends number
  ? IntAddSingleHepler<N1, N2>
  : number

// 两个数字类型相减，得到绝对值
export type IntMinusSingleAbs<
  N1 extends number,
  N2 extends number
> = IntMinusSingleAbsHelper<N1, N2>

// 数字相等
export type IsNumberEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = true
> = Strict extends true
  ? CheckLeftIsExtendsRight<L, R>
  : CheckLeftIsExtendsRight<Stringify<L>, Stringify<R>>

// 数字不相等
export type IsNumberNotEqual<
  L extends NumberLike,
  R extends NumberLike,
  Strict extends boolean = true
> = Not<IsNumberEqual<L, R, Strict>>
