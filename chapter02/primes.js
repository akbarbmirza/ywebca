// Prime Number Generator
// Returns a list of prime numbers in the range
function checkPrimes(size) {
  var primes = [];
  var isPrime = true;
  for (var i = 2; i < size; i++) {
    isPrime = true;
    for (var j = 2; j < i / 2; j++) {
      if (i % j == 0 ) {
        isPrime = false;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}

result = checkPrimes();
console.log(result);
