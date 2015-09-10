### Block-scoped Functions

* Functions implemented inside a block is bound to it
* Hoisting applies.

```js
{
foo();					// works!

function foo() {
// ..
}
}

foo();						// ReferenceError
```

* Hoisting doesn't apply to let declarations

```js
{
foo();   //ERROR
let foo = function(){ //.. };					
}
```

* Guess what foo would return in ES5 or ES6. HINT: Block scoping and hoisting.

```js
if (something) {
function foo() {
console.log( "1" );
}
}
else {
function foo() {
console.log( "2" );
}
}

foo();		// ??
```


