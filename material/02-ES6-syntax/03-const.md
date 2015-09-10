### `const` Declarations

* There's one other form of block-scoped declaration to consider: the `const`, which creates *constants*.

* What exactly is a constant? It's a variable that's read-only after its initial value is set. Consider:

```js
{
const a = 2;
console.log( a );	// 2
a = 3;				// TypeError!
}
```

* More complex types like objects can be changed. the variable a is holds a reference to the array, but the array itself is freely mutable.

```js
{
const a = [1,2,3];
a.push( 4 );
console.log( a );		// [1,2,3,4]

a = 42;					// TypeError!
}
```
* Everything is explicitly defined, including undefined.
