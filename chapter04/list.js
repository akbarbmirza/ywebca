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

//==============================================================================
// A Doubly-Linked List
//==============================================================================

/* NOTE: What is a doubly-linked list?
 * In a doubly-linked list, each node points to both its previous node and its
 * next. Each node of the list should have three members: value, prev, and
 * next.
 *
 * A list knows when it gets to the end when its next or prev value is null.
 */

//------------------------------------------------------------------------------
// Helper Functions
//------------------------------------------------------------------------------

/* Find Last Node Function
 * =======================
 *
 * The findLastNode function takes a list and returns the last node in the
 * list. i.e. the node whose next value is null;
 */

var findLastNode = function (list) {
  var node = list;

  while (node.next) {
    node = node.next;
  }

  return node;
};

/* Push Function
 * =============
 *
 * The push function takes a list and a value and adds a node with the value
 * given to the end of the list
 */

var push = function (list, value) {
  // find the last node in the given list
  var lastNode = findLastNode(list);

  // create the node we want to add
  var node = {
   value: value,
   prev: lastNode,
   next: null
  };

  // set the next pointer in the last node, to point to our new node
  lastNode.next = node;
};

// NOTE: TEST CODE
var array = [0, 1, 2];

var firstNode = {value: 0, prev: null, next: null},
    secondNode = {value: 1, prev: firstNode, next: null},
    thirdNode = {value: 2, prev: secondNode, next: null};

firstNode.next = secondNode;
secondNode.next = thirdNode;

console.log('=== TEST PUSH ===');
push(firstNode, 3);
console.log(firstNode);

/* Pop Function
 * ============
 *
 * The pop function takes a list, removes a node from the end of the
 * list and returns its value.
 */

var pop = function (list) {
  // find the last node in the given list
  // i.e. the node we're going to remove
  var lastNode = findLastNode(list);

  // find the node before that node
  var prevNode = lastNode.prev;

  // set lastNode.prev to null
  //lastNode.prev = null;

  // set prevNode.next to null
  prevNode.next = null;

  // return the value of the node we removed
  return lastNode.value;
};

// NOTE: TEST CODE
console.log('=== TEST POP ===');
pop(firstNode);
console.log(firstNode);

/* Shift Function
 * ==============
 *
 * The shift function takes a list, removes a node from the beginning of the
 * list and returns its value.
 */

/* Doesn't work because JS doesn't let you replace passed objects completely...
var shift = function (list) {
  // store the first node
  var firstNode = list;

  // store the rest of the list
  list = list.next;

  // remove the first node from the rest of the list
  list.prev = null;

  // return the value of our first node
  return firstNode.value;
};
*/

var shift = function (list) {
  // store the value in first node
  var val = list.value;

  // store the value of the second in the first node
  list.value = list.next.value;

  // find the third node;
  var thirdNode = list.next.next;

  // first node should point to third node
  list.next = thirdNode;

  // third node's prev should point to first
  thirdNode.prev = list;

  // return value from original first node
  return val;
}

// NOTE: TEST CODE
console.log('=== TEST SHIFT ===');
var shifted = shift(list);
console.log('SHIFTED:', shifted);
console.log(list);

/* Unshift Function
 * ================
 *
 * The shift function takes a list, and adds a node with the value given to
 * the beginning of the list.
 */

var unshift = function (list, value) {
  // create a node and give it the values in the first node
  var node = {
    value: list.value,
    next: list.next,
    prev: list
  };

  // give the first node the new value
  list.value = value;

  // set the first node's next to the node we just added
  list.next = node;
}

// NOTE: TEST CODE
console.log('=== TEST UNSHIFT ===');
unshift(list, 5);
console.log(list);

//------------------------------------------------------------------------------
// End Helper Functions
//------------------------------------------------------------------------------

/* Array to Doubly-Linked List Function
 * ====================================
 *
 * The arrayToList function builds up a list data structure, when given an array
 * as an argument.
 */

var arrayToDLL = function (array) {

};

/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value];
if(module) module.exports = Exer;
