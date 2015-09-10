### Block-Scoped Declarations

* The old way of creating a block scope: the immediately invoked function expression (IIFE):

    ```js
    var a = 2;

    (function IIFE(){
    var a = 3;
    console.log( a );	// 3
    })();

    console.log( a );		// 2
    ```


