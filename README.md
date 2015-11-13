# The Two Pillars of JavaScript: Introduction to Functional Programming

Tweet questions @JS_Cheerleader with the hashtag #JSPillars.

* [What is functional programming?](doc/fp.md)
* [#FuncFlow slides](https://slidr.io/ericelliott/learn-to-flow-with-functional-programming#1).
* [Imperative](https://github.com/learn-javascript-courses/funcflow-examples/blob/master/examples/double/imperative/index.js) vs [declarative](https://github.com/learn-javascript-courses/funcflow-examples/blob/master/examples/double/declarative/index.js).
* **Pure functions** vs impure.
  - No side effects.
  - Given the same inputs, always returns the same output.
  - Relies on no external state.
* [Store prototype with Mori](https://github.com/ericelliott/checkin/blob/13cd6ce0ed028c5431409f8981005df2b06c3638/source/shared/store/index.js) - Exploring the Mori API. Exercise: Can you make this more functional? Hint: Functions like `each()` & `[].forEach()` are side-effect-only functions.
* [Redux](https://github.com/rackt/redux) - App state management with pure functions (great with React).
* [Student project](https://github.com/learn-javascript-courses/checkin#checkin)

## Exploring the Store Prototype

```sh
cd <your destination folder>
git clone git@github.com:ericelliott/checkin.git checkin-example
cd checkin-example
git checkout v1.1.3
```

You should see this:

```
Note: checking out 'v1.1.3'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -b with the checkout command again. Example:

  git checkout -b new_branch_name

HEAD is now at 13cd6ce... 1.1.3
```

```sh
npm install
```

Open the project in your favorite editor...

```sh
atom . #atom editor
```

Or...

```sh
subl . #sublime text
```

Vimsters, emackers, you know what to do. Notepad users, not sure what to tell you... ¯\_(ツ)_/¯

Return to the terminal:

```sh
npm run watch # Auto lint & test on save
```

This project is built on the [Universal React Boilerplate](https://github.com/cloverfield-tools/universal-react-boilerplate#universal-react-boilerplate).


## Related

* [Don't Write for Loops](http://jamison.dance/11-06-2015/dont-write-for-loops/) (Unless you *really* need to manage looping.)
* [The Two Pillars of JavaScript Pt. 2: Functional Programming](https://medium.com/javascript-scene/the-two-pillars-of-javascript-pt-2-functional-programming-a63aa53a41a4).
* [The Single Biggest Mistake Programmers Make Every Day](https://medium.com/javascript-scene/the-single-biggest-mistake-programmers-make-every-day-62366b432308) some of my thoughts on the importance of pure functions.
* [10 Interview Questions Every JavaScript Developer Should Know](https://medium.com/javascript-scene/10-interview-questions-every-javascript-developer-should-know-6fa6bdf5ad95).
* [The Dao of Immutability](https://medium.com/javascript-scene/the-dao-of-immutability-9f91a70c88cd).
* [Asynchronous Programming at Netflix](https://www.youtube.com/watch?v=gawmdhCNy-A).
* [Learn Rx](http://reactivex.io/learnrx/). Exercises.
* [The Introduction to Reactive Programming You've Been Missing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754).
* [General Theory of Reactivity](https://github.com/kriskowal/gtor).
