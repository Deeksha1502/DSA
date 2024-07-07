const Fibonacci = (n) => {
  if (n <= 1) {
    return n;
  } else {
    for (let i = 0; i < n; i++) {
      console.log(Fibonacci(n - 1) + Fibonacci(n - 2));
    }
  }
};

console.log(Fibonacci(5));
