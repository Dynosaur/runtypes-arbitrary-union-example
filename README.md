# runtypes-arbitrary-union-example
After some quick testing, it appears that the following code works as intended, in versions `5.2.0` and `5.0.2`.
```
import { Union, Literal } from 'runtypes';

const stringsToBecomeLiterals: string[] = ['foo', 'bar'];
const literals = stringsToBecomeLiterals.map(s => Literal(s));

const union = Union(...literals) // "foo" | "bar"
```
However, in both versions, I get this error:
```
Expected 1-20 arguments, but got 0 or more.ts(2556)
union.d.ts(105, 45): An argument for 'A' was not provided.
```
If typescript errors are ignored during compilation and is allowed to run, it runs as intended with no runtime errors.

In this repo, I'm using runtypes `5.2.0`, however I made a similar one locally using version `5.0.2` to make sure it still worked.
___
On a separate, irrelevant note, in both versions, doing something like this:
```
import { Union, Literal } from 'runtypes';

const stringsToBecomeLiterals: string[] = new Array(100).fill(null).map((v, i) => i.toString());
const literals = stringsToBecomeLiterals.map(s => Literal(s));

const union = Union(...literals) // "foo" | "bar"

console.log(union.validate('99')); // { success: true, value: '99' }
```
is successful, which I expect from version `5.2.0`, but not `5.0.2` since the typings led me to believe only up to 20 were possible, but I suppose I simply misinterpreted that.
Just thought that was interseting.
