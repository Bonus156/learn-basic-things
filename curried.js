console.log('hello');

function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  }
}

const fc = curry(sum);

console.log(fc(1)(1)(1));
console.log(fc(1)()(1)()(1));