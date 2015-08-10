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



/*----------------------------    MUTABILITY    -----------------------------*/



/*--------------------------    OBJECTS AS MAPS    --------------------------*/



/*----------------------------    ARRAYOLOGY    -----------------------------*/



/*-------------------    STRINGS AND THEIR PROPERTIES    --------------------*/



/*------------------------   THE ARGUMENTS OBJECT    ------------------------*/



/*--------------------------    THE MATH OBJECT    --------------------------*/










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
