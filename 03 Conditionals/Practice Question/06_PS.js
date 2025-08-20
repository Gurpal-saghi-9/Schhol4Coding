/*
Q.6- Create a simple ATM program.
User can choose:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit
Note that in case of “Deposit” if deposit amount is less than 1Rs produce error otherwise deposit the amount and show
the message with a new balance. And in case of “Withdraw” if withdraw amount is greater than balance then or less
than 1Rs then produce error otherwise withdraw amount and show remaining balance.
*/
let balance = 10000; // Initial balance

let choice = 4; // 👈 Change this value to 1, 2, 3, or 4 to test different actions

if (choice === 1) {
  console.log(`💰 Your current balance is ₹${balance}`);
}

else if (choice === 2) {
  let deposit = 500; // 👈 Change deposit amount here

  if (deposit < 1 || isNaN(deposit)) {
    console.log("❌ Invalid deposit amount. Must be ₹1 or more.");
  } else {
    balance += deposit;
    console.log(`✅ ₹${deposit} deposited successfully!`);
    console.log(`New balance: ₹${balance}`);
  }
}

else if (choice === 3) {
  let withdraw = 300; // 👈 Change withdrawal amount here

  if (withdraw < 1 || isNaN(withdraw)) {
    console.log("❌ Invalid withdrawal amount. Must be ₹1 or more.");
  } else if (withdraw > balance) {
    console.log("❌ Insufficient balance.");
  } else {
    balance -= withdraw;
    console.log(`✅ ₹${withdraw} withdrawn successfully!`);
    console.log(`Remaining balance: ₹${balance}`);
  }
}

else if (choice === 4) {
  console.log("👋 Thank you for using the ATM!");
}

else {
  console.log("❌ Invalid choice. Please select 1, 2, 3, or 4.");
}
