// Quiz: Colors of the Rainbow (6-4)

// Original example says var rainbow, but eslint keeps changing it to const
const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

// your code goes here
rainbow.splice(2, 1, "Yellow", "Green");
rainbow.splice(rainbow.length, 0, "Purple");

console.log(rainbow);

/* ------------------------------------ - ----------------------------------- */
// Quiz: Quidditch Cup (6-5)
// Original example says var team, but eslint keeps changing it to const
const team = [
  "Oliver Wood",
  "Angelina Johnson",
  "Katie Bell",
  "Alicia Spinnet",
  "George Weasley",
  "Fred Weasley",
  "Harry Potter",
];

function hasEnoughPlayers(givenTeam) {
  if (givenTeam.length >= 7) {
    return true;
  } else {
    return false;
  }
}
console.log(hasEnoughPlayers(team));

/* ------------------------------------ - ----------------------------------- */

const donuts = ["jelly donut", "chocolate donut", "glazed donut"];

for (let i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
}
/* ------------------------------------ - ----------------------------------- */

// Quiz: Another Type of Loop (6-8)
// Directions:
// Use the array's forEach() method to loop over the following array and
// add 100 to each of the values if the value is divisible by 3.
/*
 * QUIZ REQUIREMENTS
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - Inside the loop, you must use an `if` statement to verify code is divisible by 3
 *  - Inside the loop, you can updade an element ONLY by using the arrayName[index]
 *  - Outside the loop, you can use `console.log` to verify the `test` variable
 */

const test = [
  12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148,
  169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139,
];

// Write your code here
console.log(test);

test.forEach(function (element, i, array) {
  if (element % 3 === 0) {
    array[i] = element + 100;
  }
});

console.log(test);

/* ------------------------------------ - ----------------------------------- */
/* Quiz: I Got Bills (6-9)

 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `bills` and `totals`
 * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
 * - Your `totals` array should be an array of numbers
 * - Your code should print the `totals` array to the console
 * - The output must be as described above.
 */

const bills = [
  50.23, 19.12, 34.01, 100.11, 12.15, 9.9, 29.11, 12.99, 10.0, 99.22, 102.2,
  100.1, 6.77, 2.22,
];

const totals = bills.map(function (element) {
  const total = (element * 1.15).toFixed(2);
  return Number(total);
});

console.log(totals);

/* ------------------------------------ - ----------------------------------- */
/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

const numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100],
];

// your code goes here
for (let row = 0; row < numbers.length; row++) {
  for (let col = 0; col < numbers[row].length; col++) {
    if (numbers[row][col] % 2 === 0) {
      numbers[row][col] = "even";
    } else {
      numbers[row][col] = "odd";
    }
  }
}