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

const umbrella = {
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
  close: function () {
    if (umbrella.isOpen === false) {
      // at first, I put :umbrella.isClose === true (WRONG)
      return "The umbrella is already closed!";
    } else {
      umbrella.isOpen = false; // at first, I put umbrella.isClose = true (WRONG)
      return "Julia closed the umbrella!";
    }
  },
};

/* ------------------------------------ - ----------------------------------- */
/* Quiz: Menu Items (7-2)

Create a breakfast object to represent the following menu item:

The Lumberjack - $9.95
eggs, sausage, toast, hashbrowns, pancakes

The object should contain properties for the name, price, and ingredients.
*/

const breakfast = {
  name: "The Lumberjack",
  price: "$9.95",
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"],
};

console.log(breakfast);

/* ------------------------------------ - ----------------------------------- */
/* Quiz: Bank Accounts 1 (7-3)

Directions:
Using the given object:
add a printAccountSummary() method that returns the following account message:

Welcome!
Your balance is currently $1000 and your interest rate is 1%.

QUIZ REQUIREMENTS
 * - Your code should have an object `savingsAccount` 
 * - Your `savingsAccount` object should have the `balance` and `interestRatePercent` property
 * - Your `savingsAccount` object should have a `printAccountSummary()` method
 * - Your `printAccountSummary()` method should return the EXACT expected message
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

const savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    const verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  // your code goes here
  printAccountSummary: function () {
    return "Welcome!\nYour balance is currently $1000 and your interest rate is 1%.";
  },
};

console.log(savingsAccount.printAccountSummary());
/* ------------------------------------ - ----------------------------------- */
/* Quiz: Facebook Friends (7-5)

Directions:
Create an object called facebookProfile. The object should have 3 properties:

1.your name
2.the number of friends you have, and
3.an array of messages you've posted (as strings)

The object should also have 4 methods:

1.postMessage(message) - adds a new message string to the array
2.deleteMessage(index) - removes the message corresponding to the index provided
3.addFriend() - increases the friend count by 1
4.removeFriend() - decreases the friend count by 1
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */

// TIP -
// In an array,
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here
const facebookProfile = {
  name: "Haijoon Kim",
  friends: 10,
  messages: ["hello", "happy birthday", "haha!"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends++;
  },
  removeFriend: function () {
    facebookProfile.friends--;
  },
};
/* ------------------------------------ - ----------------------------------- */
/* Quiz: Donuts Revisited (7-6)

Directions: Use the forEach() method to loop over the array and print out the following donut
summaries using console.log.

Jelly donuts cost $1.22 each
Chocolate donuts cost $2.45 each
Cider donuts cost $1.59 each
Boston Cream donuts cost $5.99 each

* - Your code should have an array named `donuts`
 * - Your `donuts` array should call the `forEach()` method
 * - Your `forEach()` loop should output the donut summaries
 * - BE CAREFUL ABOUT THE PUNCTUATION, SPACES, AND EXACT WORDS TO BE PRINTED.
 */

// This is an array of objects.
const donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 },
];

// your code goes here
donuts.forEach((element) =>
  console.log(element.type + " donuts cost $" + element.cost + " each")
);