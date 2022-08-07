const memoFuc = (func) => {
  const cache = {};
  return (input) => {
    return cache[input] || (cache[input] = func(input));
  };
};

//fibonnaci sum
const fib = memoFuc((n) => {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
});

console.time("T1");

console.log(fib(500));

//It stops recomputing the same logic again and again for the same input, if that input has already been calculated.

console.timeEnd("T1");
