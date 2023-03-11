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
