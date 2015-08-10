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

/* Sum Function
 * ============
 *
 * The sum function takes an array of numbers and returns the sum of these
 * numbers.
 */

var sum = function(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

// NOTE: TEST CODE
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

//==============================================================================
// Caesar Cipher
//==============================================================================

var alpha = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
];

var encrypt = function (toEncrypt, key) {

  var cipher = {' ': ' '};

  var shift = alpha.indexOf(key.toUpperCase());

  for (var i = 0, len = alpha.length; i < len; i++) {
    if (i + shift < len) {
      cipher[alpha[i]] = alpha[i + shift];
    } else {
      cipher[alpha[i]] = alpha[(i + shift) - 26];
    }
  }

  console.log(cipher);

  var encrypted = '';

  for (var i = 0, len = toEncrypt.length; i < len; i++) {
    encrypted += cipher[toEncrypt[i].toUpperCase()];
  }

  return encrypted;
};

var decrypt = function (toDecrypt, key) {

  var cipher = {' ': ' '};

  var shift = alpha.indexOf(key.toUpperCase());

  for (var i = 0, len = alpha.length; i < len; i++) {
    if (shift - i > 0) {
      cipher[alpha[i]] = alpha[len - shift + i];
    }
    else {
      cipher[alpha[i]] = alpha[i - shift];
    }
  }

  console.log(cipher);

  var decrypted = '';

  for (var i = 0, len = toDecrypt.length; i < len; i++) {
     decrypted += cipher[toDecrypt[i].toUpperCase()];
  }

  return decrypted;
};

// NOTE: TEST CODE
encrypt('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', 'D');

decrypt('WKH TXLFN EURZQ IRA MXPSV RYHU WKH ODCB GRJ', 'D');

/***********************    DANGER ZONE DO NOT CROSS    ***********************/
if (typeof Exer === 'undefined') Exer = {};

if (typeof range !== 'undefined') Exer.range = range;
if (typeof sum !== 'undefined') Exer.sum = sum;
if (typeof encrypt !== 'undefined') Exer.encrypt = encrypt;
if (typeof decrypt !== 'undefined') Exer.decrypt = decrypt;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
