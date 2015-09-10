## Spread/Rest

* Spread or Rest operator`...` 

```js
function foo(x,y,z) {
console.log( x, y, z );
}

foo( ...[1,2,3] );				// 1 2 3
```

* When `...` is used in front of an array (actually, any *iterable*, which we cover in Chapter 3), it acts to "spread" it out into its individual values.

* Another cool usage is to spread out/expand a value in other contexts as well, such as inside another array declaration:

```js
var a = [2,3,4];
var b = [ 1, ...a, 5 ];

console.log( b );					// [1,2,3,4,5]
```

* Another common usage is to *gather*.

```js
function foo(x, y, ...z) {
console.log( x, y, z );
}

foo( 1, 2, 3, 4, 5 );			// 1 2 [3,4,5]
```

* if you don't have any named parameters, the `...` gathers all arguments:

```js
function foo(...args) {
console.log( args );
}

foo( 1, 2, 3, 4, 5);			// [1,2,3,4,5]
```
