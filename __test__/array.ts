import { ArraySet, TupleToUnion } from './../src/array';
import { Filter } from '../src'

{
	const t1: TupleToUnion<['a', 'b']> = 'a'
	const t2: TupleToUnion<['a', 'b']> = 'b'
}
{
	const t1: ArraySet<[1, 3, 4], 2, 5> = [1, 3, 5]
}

{
	// const t1:GetTuple<0> = []
	// const t2:GetTuple<1> = ['a']
	// const tt:[unknown, unknown] = [1,3]
}

{
	type a_filter = Filter<[1, 2, 3], 2, true>
	type b_filter = Filter<[1, 2, 3], 2, false>

	const aa: Array<string> = ['a', 'b']
	const aa1: Array<'a'> = ['a', 'a']
	const aa2: Array<'a' | 'b'> = ['a', 'b']
}