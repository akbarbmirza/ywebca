// Student Workspace
/* Minimum
 * Write a function min that takes two arguments and returns their minimum.
 */

Exer.min = function (a, b, c) {

  // If `c` is not given, find the min of a & b
  if (!c) {
    // if `a` is less than `b`, return `a`
    // else return `b`
    return a < b ? a : b;
  }
  // Otherwise...
  else {
    // If `a` is less than `b`
    if (a < b) {
      // if `a` is less than `c`, return `a`
      // else return `c`
      return a < c ? a : c;
    }
    // Otherwise...
    else {
      // if `b` is less than `c`, return `b`
      // else return `c`
      return b < c ? b : c;
    }
  }

}

Exer.min3 = function (a, b, c) {

  // If `a` is less than `b`
  if (a < b) {
    // if `a` is less than `c`, return `a`
    // else return `c`
    return a < c ? a : c;
  }
  // Otherwise...
  else {
    // if `b` is less than `c`, return `b`
    // else return `c`
    return b < c ? b : c;
  }
  
}
