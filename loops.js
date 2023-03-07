/*
 * Programming Quiz: JuliaJames (4-1)

* QUIZ DIRECTIONS:
Write a while loop that:

Loop through the numbers 1 to 20
If the number is divisible by 3, print "Julia"
If the number is divisible by 5, print "James"
If the number is divisible by 3 and 5, print "JuliaJames"
If the number is not divisible by 3 or 5, print the number

 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

let x = 1;

while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 !== 0 || x % 5 !== 0) {
    console.log(x);
  }
  x = x + 1;
}

// check divisibility
// print Julia, James, or JuliaJames
// increment x

/* ------------------------------------ - ----------------------------------- */
/*
Directions:
Write a loop that prints out the following song. 
Starting at 99, and ending at 1 bottle.

99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!

---
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

let num = 99;

while (num > 0) {
  if (num === 1) {
    console.log(
      num +
        " bottle of juice on the wall! " +
        num +
        " bottle of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  } else if (num === 2) {
    console.log(
      num +
        " bottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottle of juice on the wall!"
    );
  } else {
    console.log(
      num +
        " bottles of juice on the wall! " +
        num +
        " bottles of juice! Take one down, pass it around... " +
        (num - 1) +
        " bottles of juice on the wall!"
    );
  }

  num -= 1; // (same as "num = num - 1" also same as "num--"
}

/* ------------------------------------ - ----------------------------------- */
/* Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.

Your Code:
Your output should look like the following:

T-60 seconds
T-59 seconds
T-58 seconds
...
T-51 seconds
Orbiter transfers from ground to internal power
T-49 seconds
...
T-3 seconds
T-2 seconds
T-1 seconds
Solid rocket booster ignition and liftoff! */

let count = 60;

while (count >= 0) {
  if (count === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (count === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (count === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (count === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (count === 6) {
    console.log("Main engine start");
  } else if (count === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else {
    console.log("T-" + count + " seconds");
  }
  count -= 1;
}

/* ------------------------------------ - ----------------------------------- */
/*
 * Directions:
Rewrite the following while loop as a for loop:
var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

 * Programming Quiz: Changing the Loop (4-4)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// rewrite the while loop as a for loop

for (let x = 9; x >= 1; x = x - 1) {
  console.log("hello " + x);
}

// even though I wrote x2 in here, on the quiz I had to write it as "x"
// actually I was wrong - I could use x because it's in different scope,
// so I changed it back to x instead of x2.

/* ------------------------------------ - ----------------------------------- *1

/* [Quiz: Fix the Error 1 (4-5)]
Directions:
Here is a for loop that's supposed to print the numbers 5 through 9. Fix the error!

for (x < 10; x++) {
  console.log(x);
}

/*
 * Programming Quiz: Fix the Error 1 (4-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `5`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should increment `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// fix the for loop

for (let x = 5; x < 10; x++) {
  console.log(x);
}

/* ------------------------------------ - ----------------------------------- */