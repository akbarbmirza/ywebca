// Student Workspace
Fizz.buzz = function () {
	for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 00) {
      console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
      console.log("Fizz");
    }
    else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  /* Clever Solution
  for (var i = 1; i <= 100; i++) {
    var str = "";
    if (i % 3 == 0) {
        str += "Fizz";
    }
    if (i % 5 == 0) {
        str += "Buzz";
    }
    if (!str) {
        str = i;
    }
    console.log(str);
  }
  */
};