# ASSERTION

<span>An **assertion** is a *comparison* which *throws an exception* upon failure.</span>
<!-- .element: class="fragment" -->

```js
const assert = value => {
  if (!value) {
    throw new Error('assertion failure!');
  } 
};
```
<!-- .element: class="fragment" -->

note:

- does nothing upon success
- handrolled `assert()` function
