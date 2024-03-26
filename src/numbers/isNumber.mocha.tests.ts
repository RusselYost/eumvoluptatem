

import isNumber from './isNumber';

const TESTS = [
	{ input: 0, expected: true },
	{ input: 1, expected: true },
	{ input: Number.NaN, expected: true },
	{ input: Number.EPSILON, expected: true },
	{ input: Number.MAX_SAFE_INTEGER, expected: true },
	{ input: Number.MIN_SAFE_INTEGER, expected: true },
	{ input: Number.MAX_VALUE, expected: true },
	{ input: Number.MIN_VALUE, expected: true },
	{ input: Number.NEGATIVE_INFINITY, expected: true },
	{ input: Number.POSITIVE_INFINITY, expected: true },

	{ input: '', expected: false },
	{ input: 'a string', expected: false },
	{ input: undefined, expected: false },
	{ input: null, expected: false },
	{ input: false, expected: false },
	{ input: true, expected: false },
	{ input: {}, expected: false },
	{ input: [], expected: false },
	{ input: () => {}, expected: false },
	{ input: /a/, expected: false },
];


describe('vet/numbers/isNumber', () => {
	TESTS.forEach((test) => {
		it(
			`(${test.input})-->(${test.expected})`,
			(done) => done(
				isNumber(test.input) === test.expected ? null : new Error()
			)
		);
	});
});
