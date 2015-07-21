// Student Workspace

/* Bean Counting
 * Write a function countBs that takes a string as its only argument and
 * returns a number that indicates how many uppercase “B” characters are
 * in the string.
 */
Exer.countBs = function (str) {

  return Exer.countChar(str, "B");

};

/* countChar
 * countChar that behaves like countBs, except it takes a second argument that
 * indicates the character that is to be counted (rather than counting only
 * uppercase “B” characters).
 */
Exer.countChar = function (str, char) {

  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }
  return count;

};

/* countCharX
 * countCharX (that is also a member of Exer) that accepts one parameter
 * (e.g. char) and returns a function that counts the number of chars that
 * appear in a given string argument.
 */
Exer.countCharX = function (char) {

  return function (str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        count++;
      }
    }
    return count;
  }

};
