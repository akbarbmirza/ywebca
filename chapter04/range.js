//==============================================================================
// The Sum of a Range
//==============================================================================

/* Range Function
 * ==============
 *
 * The range function takes two arguments, start and end, and returns an array
 * containing all the numbers from start up to (and including) end.
 *
 * The range function also take an optional third argument that indicates the
 * “step” value used to build up the array. If no step is given, the array
 * elements go up by increments of one, corresponding to the old behavior.
 */

var range = function(start, end, step) {
  // Create an array to be returned
  var result = [];

  // If no step was given...
  if (!step) {
    // then step should be set to 1, if start is smaller than end
    if (start < end) {
      step = 1;
    }
    // or step should be set to -1, if start is larger than end
    else {
      step = -1;
    }
  }
  // Otherwise, if step is negative, then do the following
  else if (step < 0) {
    for (var i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  // Otherwise...
  else {
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
  }

  // Return the resulting array
  return result;
};

/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if(!Exer) Exer = {};
for (value in this)
  Exer[value] = this[value];
if(module) module.exports = Exer;
