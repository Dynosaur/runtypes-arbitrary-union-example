import { Union, Literal } from 'runtypes';

const arbitraryLength = 34;
const numbers: string[] = new Array(arbitraryLength).fill(null).map((value, index) => index.toString());
const literals = numbers.map(number => Literal(number));

const union = Union(...literals); // <= type error, prevents compilation

// however, if ignored, these still work
console.log(union.validate('0')); // success
console.log(union.validate('33')); // success
console.log(union.validate('foo')); // failure
