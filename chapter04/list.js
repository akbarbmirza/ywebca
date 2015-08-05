//==============================================================================
// A (Linked) List
//==============================================================================

/* NOTE: What is a list?
 * A common data structure is the list (not to be confused with the array).
 * A list is a nested set of objects, with the first object holding a reference
 * to the second, the second to the third, and so on.
 */

//------------------------------------------------------------------------------
// Helper Functions
//------------------------------------------------------------------------------

/* Prepend Function
 * ================
 *
 * The prepend function takes an element and a list and returns a new list that
 * adds the element to the front of the input list
 */

var prepend = function(element, list) {
  return {value: element, rest: list};
};

/* nth Function (Recursive)
 * ========================
 *
 * The nth function takes a list and a number and returns the element at the
 * given position in the list, or undefined when there is no such element.
 */

var nth = function(list, number) {
  // If the list doesn't exist, there is no such element
  if (!list || number < 0) {
    return undefined;
  }

  // Base Case: if the number is 1, return the value of the list
  else if (number === 0) {
    return list.value;
  }

  // Recursive Case: call nth with the rest of the list, and n - 1
  else {
    return nth(list.rest, number - 1);
  }
};

//------------------------------------------------------------------------------
// End Helper Functions
//------------------------------------------------------------------------------

/* Array to List Function
 * ======================
 *
 * The arrayToList function builds up a list data structure, when given an array
 * as an argument.
 */

var arrayToList = function(array) {
  // Create a list to be returned
  var list = null;

  // Add items from the given array to the result array in reverse order
  for (var i = array.length - 1; i >= 0; i--) {
    list = prepend(array[i], list);
  }

  // Return the resulting array
  return list;
};


/* List to Array Function
 * ======================
 *
 * The listToArray function takes a list object and returns the array equivalent
 * of the list.
 */

var listToArray = function(list) {
  // Create an array to be returned
  var array = [];

  // Until we reach the end of a list
  for (var node = list; node; node = node.rest) {
    // Push the current value to the end of the array
    array.push(list.value);
  }

  // Return the resulting array
  return array;
};

// NOTE: TEST CODE
console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value];
if(module) module.exports = Exer;
