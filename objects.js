/* Quiz: Umbrella (7-1)

Using the umbrella example from the previous video, see if you can follow the example open() 
method and create the close() method. 
It's alright if you have trouble at first! We'll go into more detail later in this lesson.

QUIZ REQUIREMENTS
Your code should have a variable `umbrella`
The variable `umbrella` should be an object
Your `umbrella` object should have the `color` and `isOpen` property
Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
 */

var umbrella = {
  color: "pink",
  isOpen: true,
  open: function () {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
  },
  // your code goes here
  isClose: true,
  close: function () {
    if (umbrella.isOpen === false) { // at first, I put :umbrella.isClose === true (WRONG)
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false; // at first, I put umbrella.isClose = true (WRONG)
      return "Julia closed the umbrella!";
    }
  },
};

/* ------------------------------------ - ----------------------------------- */
