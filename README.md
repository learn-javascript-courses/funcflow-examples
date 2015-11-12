# funcflow-examples
Examples for The Two Pillars of JS: Functional Flow

* [What is functional programming?](doc/fp.md)
* [#FuncFlow slides](https://slidr.io/ericelliott/learn-to-flow-with-functional-programming#1).
* [Imperative](https://github.com/learn-javascript-courses/funcflow-examples/blob/master/examples/double/imperative/index.js) vs [declarative](https://github.com/learn-javascript-courses/funcflow-examples/blob/master/examples/double/declarative/index.js).
* Pure vs impure.
  - No side effects.
  - Given the same inputs, always returns the same output.
  - Relies on no external state.
* [Store prototype with Mori](https://github.com/ericelliott/checkin/blob/13cd6ce0ed028c5431409f8981005df2b06c3638/source/shared/store/index.js) - Exploring the Mori API. Exercise: Can you make this more functional? Hint: Functions like `each()` & `[].forEach()` are side-effect-only functions.
* [Redux](https://github.com/rackt/redux) - App state management with pure functions (great with React).

## Related

* [The Two Pillars of JavaScript Pt. 2: Functional Programming](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4).
* [The Single Biggest Mistake Programmers Make Every Day](https://medium.com/javascript-scene/the-single-biggest-mistake-programmers-make-every-day-62366b432308) for thoughts on the importance of pure functions.
* [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95).
* [The Dao of Immutability](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd).
* [Asynchronous Programming at Netflix](https://www.youtube.com/watch?v=gawmdhCNy-A).
* [The Introduction to Reactive Programming You've Been Missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754).
* [General Theory of Reactivity](https://github.com/kriskowal/gtor).
