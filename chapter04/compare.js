//==============================================================================
// Deep Comparison
//==============================================================================

/* Deep Equal Function
 * ===================
 *
 * The deepEqual function takes two values and returns true only if they are
 * the same value or are objects with the same properties whose values are also
 * equal when compared with a recursive call to deepEqual.
 */

var deepEqual = function(valOne, valTwo) {
  // If valOne is an Object...
  if (typeof valOne === 'object') {
    // and valTwo isn't an Object, they're not equal
    if (typeof valTwo !== 'object') {
      return false;
    }
    // and valTwo is an Object...
    else {
      // check all properties in first valOne
      for (var property in valOne) {
        // if valOne's properties don't deepEqual valTwo properties,
        // they're not equal
        if (!deepEqual(valOne[property], valTwo[property])) {
          return false;
        }
      }
      // check all properties in second valTwo
      for (var property in valTwo) {
        // if valTwo's properties don't deepEqual valTwo properties,
        // they're not equal
        if (!deepEqual(valOne[property], valTwo[property])) {
          return false;
        }
      }
      // if the program has gotten to this point, valOne deepEquals valTwo
      return true;
    }
  }
  // Otherwise...
  else {
    // return whether valOne is equal to valTwo
    return valOne === valTwo;
  }
};

// NOTE: TEST CODE
var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value];
if(module) module.exports = Exer;
