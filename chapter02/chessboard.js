// Student Workspace
Chess.start = function (size) {
  // if no size param given, then size = 8
  if (!size && size != 0) {
    size = 8;
  }

  // declare variable to hold content of a line
  var msg = "";

  // start loop
  for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
      // if the sum of i and j is even, add a space
      if ((i + j) % 2 == 0) {
        msg += " ";
      }
      // else, add a hash
      else {
        msg += "#";
      }
    }
    // add newline character
    msg += "\n";
  }

  return msg;
};