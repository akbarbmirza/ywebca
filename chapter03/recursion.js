// Student Workspace
/* Recursion
 * Define a recursive function isEven corresponding to this description.
 * The function should accept a number parameter and return a Boolean.
 */

Exer.isEven = function(number) {

  // Special Case: If `number` is negative, check if its positive counterpart
  // is even.
  if (number < 0) {
    number = -number;
  }
  // If `number` is 0, then it is even.
  if (number === 0) {
    return true;
  }
  // Otherwise, if `number` is 1, then it is odd.
  else if (number === 1) {
    return false;
  }
  // Otherwise...
  else {
    // For any other `number`, its even-ness is the same as the even-ness of
    // `number` - 2.
    return Exer.isEven(number - 2);
  }

}

Exer.isFooDivByBar = function (foo, bar) {
  // Base Case:
  // If `foo` is less than `bar`, then it can't be divisible by bar
  if (foo < bar) {
    return false;
  }
  // If 'foo' and 'bar' are equal, then they must be divisible by each other
  else if (bar == foo) {
    return true;
  }
  // Recursive Case:
  // Run again by subtracting `bar` from `foo`.
  else {
    return Exer.isFooDivByBar(foo - bar, bar);
  }
}

Exer.isDivisibleBy = function (foo) {

  var isDivisible = function (bar) {
    // If bar is less than foo,
    // return false
    if (bar < foo) {
      return false;
    }
    // Otherwise, if bar is the same as foo,
    // then we return true
    else if (bar == foo) {
      return true;
    }
    // Otherwise...
    else {
      // We subtract the divisor by foo
      bar -= foo;
      // NOTE: DEBUG CODE
      console.log('foo', foo);
      console.log('bar', bar);
      // Run isDivisible again on the smaller value of bar
      return isDivisible(bar);
    }
  };

  // return the isDivisible function to the test
  return isDivisible;

}
