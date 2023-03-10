// revserMe "hello", "I'm good.", "You are pretty"
function reverseString(reverseMe) {
  // reverseMe = 'hello';
  let reversed = "";
  for (let i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }

  return reversed;
}

// var reversed = "";
// const reverseMe = "hello"

// for (var i = reverseMe.length - 1; 0 <= i; i--) {
//   reversed = reversed + reverseMe[i];
// }
// // i = 4 -> "" + "o" -> "o"
// // i = 3 -> "o" + "l" -> "ol"
// // i = 2 -> "ol" + "l" -> "oll"
// // i = 1 -> "oll" + "e" -> "olle"
// // i = 0 -> "olle" + "h" -> "olleh"

// var revsered2 = "";
// const reverseMe2 = "I'm very handsome";

// for (var i = reverseMe2.length - 1; 0 <= i; i--) {
//   reversed2 = reversed2 + reverseMe2[i];
// }

/* ------------------------------------ - ----------------------------------- */
// [QUIZ] Declare a function called laugh() that returns "hahahahahahahahahaha!".
// Print the value returned from the laugh() function to the console.
//
//
//
//
/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// your code goes here
function laugh() {
  return "hahahahahahahahahaha!";
}
console.log(laugh());
/* ------------------------------------ - ----------------------------------- */
// [QUIZ] Laugh it Off! (5-2)

/*
Directions:
Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

console.log(laugh(3));

 * Programming Quiz: Laugh it Off 2 (5-2)
 *
 * Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
 *
 * Note:
 *  - make sure your the final character is an exclamation mark ("!")
 *  - make sure that your function produces the correct results when it is called multiple times
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */

function laugh2(num) {
  let laugh2 = "";
  for (let i = 0; i < num; i++) {
    laugh2 += "ha";
  }
  return laugh2 + "!";
}

// answer is laugh but the name already exists - so I used laugh2

/* ------------------------------------ - ----------------------------------- */
// [QUIZ] Build a Triangle (5-3)]
/*
 Programming Quiz: Build A Triangle (5-3)
*/

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */

// creates a line of * for a given length
function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(height) {
  let lines = "";

  for (let i = 1; i <= height; i++) {
    lines += makeLine(i);
  }
  return lines;
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));

/* ------------------------------------ - ----------------------------------- */
// [Quiz Laugh (5-4)]
// Directions:
// Write an anonymous function expression that stores a function in a variable called "laugh" and
// outputs the number of "ha"s that you pass in as an argument.
//
// laugh(3);
// Returns: hahaha!
//
/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

const laugh3 = function (num) {
  let laugh = "";
  for (let x = 1; x <= num; x++) {
    laugh += "ha";
  }

  return laugh + "!";
};
console.log(laugh3(10));

/* ------------------------------------ - ----------------------------------- */
// [QUIZ: Cry (5-5)]
// Directions:
// Write a named function expression that stores the function in a variable called cry and returns "boohoo!".
// Don't forget to call the function using the variable name, not the function name:
//
// cry();
// Returns: boohoo!
//
//* Programming Quiz: Cry (5-5)

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// your code goes here

const cry = function namedCry() {
  return "boohoo!";
};

cry();

/* ------------------------------------ - ----------------------------------- */
// Directions:
// Call the emotions() function so that it prints the output you see below, but instead of passing the laugh()
// function as an argument, pass an inline function expression instead.
//
// emotions("happy", laugh(2)); // you can use your laugh function from the previous quizzes
// Prints: "I am happy, haha!"
/*
 * Programming Quiz: Inline Functions (5-6)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */

// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", function (num) {
  let result = "";

  for (let i = 1; i <= num; i++) {
    result += "ha";
  }
  return result + "!";
});
