## A Unit Test (4/6)

```shell
$ node_modules/.bin/mocha
  requestTime middleware
    1) should add a timestamp `requestTime` prop to `req`


  0 passing (7ms)
  1 failing

  1) requestTime middleware
       should add a timestamp `requestTime` prop to `req`:
     TypeError: next is not a function
      at module.exports (lib/request-time.js:11:3)
      at Context.<anonymous> (test/request-time.spec.js:11:5)
      ...
```

*Oops.*
<!-- .element: class="fragment" -->

note:

- mocha's output
- failure should show stack trace
