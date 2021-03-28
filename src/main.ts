import { Union, Literal } from 'runtypes';

console.log(
    Union(
        ...['foo', 'bar'].map(s => Literal(s))
    ).validate('foo')
);

console.log(
    Union(
        ...['foo', 'bar'].map(s => Literal(s))
    ).validate('hello')
);
