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
// 7. Return Value

// 