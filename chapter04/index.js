/*-----------------------------    DATA SETS    -----------------------------*/

/*****************************    Data Sets 1    *****************************/

var dataOne = function (array) {

  // Log the 3rd element
  console.log(array[2]);
  // Log the 5th element
  console.log(array[4]);
  // Log the 8rd element
  console.log(array[7]);
  // Log the last element
  console.log(array[array.length - 1]);

};

// NOTE: Test Code
var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
dataOne(test);

/*****************************    Data Sets 2    *****************************/

var dataTwo = function (array) {

  for (var i = 0, len = array.length; i < len; i++) {
    console.log(array[i]);
  }

};

// NOTE: Test Code
var test = [1, 2, 3, 4, 5];
dataTwo(test);

/*-----------------------------    PROPERTIES    ----------------------------*/

var properties = function (dog) {

  console.log(dog.legs);
  console.log(dog.isAGoodBoy);

}

/*-------------------------------    METHODS    -----------------------------*/

var methods = function (dog) {

  dog.bark();

  if (dog.isAGoodBoy()) {
    dog.setBark('arf...');
  } else {
    dog.setBark('whimper');
  }

  console.log(dog.getBark());

  dog.bark();

  dog.isAGoodBoy(true);

}

/*-------------------------------    OBJECTS    -----------------------------*/

var objects = function () {

  var barkSound = 'BARK';

  var fido = {

    isAGoodBoy: function () {
      return barkSound;
    },
    setBark: function (newBark) {
      barkSound = newBark;
    },
    tricks: [ 'roll over', 'fetch', 'play Beethoven\'s 5th' ]

  };

  return fido;

};

/*----------------------------    MUTABILITY    -----------------------------*/

var mutability = function (obj1, obj2) {

  if (obj1 == obj2) {
    console.log(obj1);
  }
  else {
    var isEqual = false;
    // If Color Matches...
    if (obj1.color == obj2.color) {
      console.log('color matches');
      isEqual = true;
    }
    // If Quantity Matches...
    if (obj1.quantity == obj2.quantity) {
      console.log('quantity matches');
      isEqual = true;
    }
    // If isA Matches...
    if (obj1.isA == obj2.isA) {
      console.log('isA matches');
      isEqual = true;
    }

    if (!isEqual) {
      console.log(obj1);
      console.log(obj2);
    }
  }
};

// NOTE: TEST CODE
var x = {color: 'red', quantity: 30, isA: 'dog'};
var y = {color: 'blue', quantity: 20, isA: 'cat'};

mutability(x, y);

/*--------------------------    OBJECTS AS MAPS    --------------------------*/

var maps = function (accounts) {

  for (var user in accounts) {
    if (user.charAt(0) === 'T') {
      if (accounts[user].owed === 0) {
        console.log(user + " owes $0");
      }
    }
  }

};

// NOTE: TEST CODE
var accounts = {
  'Tom': {owed: 500},
  'Kevin': {owed: 0},
  'Savance': {owed: 1000},
  'Timothy': {owed: 0},
  'Troy': {owed: 0}
};

maps(accounts);

/*----------------------------    ARRAYOLOGY    -----------------------------*/

var arrayology = function (array) {

  var result = [];
  var inBetween = false;

  for (var i = 0; i < array.length; i++) {
    if (array[i] == 'fnord') {
      inBetween = !inBetween;
      i++;
    }
    if (inBetween) {
      result.push(array[i]);
    }
  }

  return result;
};

// NOTE: TEST CODE
var array = ['fnord', 'a', 'b', 'fnord', 'd', 'e', 'frank'];

var result = arrayology(array);
console.log(result);

/*-------------------    STRINGS AND THEIR PROPERTIES    --------------------*/

var strings = function (str) {
  var result = '';

  var start = str.indexOf('fnord') + 5;
  var end = str.indexOf('fnord', start);

  if (end > 0) {
    result = str.slice(start, end);
  }
  else {
    result = str.slice(start);
  }

  return result;
};

// NOTE: TEST CODE

var str = 'fnordhelloworld';
var str2 = 'fnordhelloworldfnordgoogoo';

strings(str);
strings(str2);

/*------------------------   THE ARGUMENTS OBJECT    ------------------------*/

var arguments = function () {

  var total = 0;

  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;

};

// NOTE: TEST CODE

arguments(1, 2, 15, 20);

/*--------------------------    THE MATH OBJECT    --------------------------*/

var math = function (arg) {

  if (typeof arg === 'string') {
    return Math.PI;
  }
  else {
    return arg * Math.random();
  }

};

// NOTE: TEST CODE

math(4);

/* !!DANGER ZONE!! */
/*  DO NOT CROSS!  */



































// Seriously, go back!





































// I told you there was a monster at the end of this book!

if (typeof Exer === 'undefined') Exer = {};

if (typeof dataOne !== 'undefined') Exer.dataOne = dataOne;
if (typeof dataTwo !== 'undefined') Exer.dataTwo = dataTwo;
if (typeof properties !== 'undefined') Exer.properties = properties;
if (typeof methods !== 'undefined') Exer.methods = methods;
if (typeof objects !== 'undefined') Exer.objects = objects;
if (typeof mutability !== 'undefined') Exer.mutability = mutability;
if (typeof maps !== 'undefined') Exer.maps = maps;
if (typeof arrayology !== 'undefined') Exer.arrayology = arrayology;
if (typeof strings !== 'undefined') Exer.strings = strings;
if (typeof arguments === 'function') Exer.arguments = arguments;
if (typeof math !== 'undefined') Exer.math = math;

if (typeof module === 'undefined') module = {};
module.exports = Exer;
