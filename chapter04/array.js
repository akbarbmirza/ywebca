//==============================================================================
// Reversing an Array
//==============================================================================

/* Reverse Array Function
 * ======================
 *
 * The reverseArray function takes an array as argument and returns a new array
 * that has the same elements in the inverse order.
 */

var reverseArray = function(array) {
  // Create an array to be returned
  var result = [];

  // Add items from the given array to the result array in reverse order
  for (var i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }

  // Return the resulting array
  return result;
};

/* Reverse Array in Place Function
 * ===============================
 *
 * The reverseArrayInPlace function does what the reverse method does:
 * it modifies the array given as argument in order to reverse its elements.
 */

var reverseArrayInPlace = function(array) {
  // Create a variable to store the length of the array to use in
  // our operation
  var len = array.length - 1;

  // Swap the first and last values in the array, then the second-first and
  // second-last, and so on...
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var temp = array[i];
    array[i] = array[len - i];
    array[len - i] = temp;
  }
};

// NOTE: TEST CODE
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value];
if(module) module.exports = Exer;
