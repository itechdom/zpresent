### let me introduce: `let`

* Variables declared by let have as their scope the block in which they are defined, as well as in any contained sub-blocks . In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function
* When we say a block, we mean any `{ }`

    ```js
    function varTest() {
    var x = 31;
    if (true) {
    var x = 71;  // same variable!
    console.log(x);  // 71
    }
    console.log(x);  // 71
    }

    function letTest() {
    let x = 31;
    if (true) {
    let x = 71;  // different variable
    console.log(x);  // 71
    }
    console.log(x);  // 31
    }
    ```
