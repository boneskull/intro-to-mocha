## Mocha's API

<span>By *default*, Mocha uses a [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development)-style API based on [RSpec](http://rspec.info/) for Ruby.</span> 
<!-- .element: class="fragment" -->

### To reduce boilerplate, Mocha exposes its API on the global context.
<!-- .element: class="fragment" -->
<span>For Node.js, this implies:</span>
<!-- .element: class="fragment" -->

1. You needn't import modules within test files.<!-- .element: class="fragment" -->
1. You must run tests with Mocha's executable instead of Node.js'.<!-- .element: class="fragment" -->

