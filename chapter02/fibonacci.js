// Fibonacci Sequence
// Returns a list of fibonacci numbers in the range

function fibonacci (n) {
  if (n <= 1) {
    return 1;
  }
  else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}

for (var i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
