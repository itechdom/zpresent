### let in loops

* You can use the let keyword to bind variables locally in the scope of loops instead of using a global variable (defined using var) for that.

```js
for (let i = 0; i<10; i++) {
  console.log(i); // 0, 1, 2, 3, 4 ... 9
  }

  console.log(i); // i is not defined
```
