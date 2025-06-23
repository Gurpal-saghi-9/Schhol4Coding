// 4. Create a “Number Knock” game. (ask the user to keep guessing the number until the user enters correct guess) .

let secretNumber = 7; // You can change this to any number or make it random
let attempts = 0;
let maxAttempts = 10;

alert("🎮 Welcome to the Number Knock Game!\nGuess a number \nYou have 10 chances!");

while (attempts < maxAttempts) {
    guess = parseInt(prompt(`Attempt ${attempts + 1} of ${maxAttempts}: Enter your guess:`));
    
    if (isNaN(guess)) {
        alert("❌ Please enter a valid number.");
        continue;
    }

    attempts++;

    if (guess === secretNumber) {
        alert(`🎉 Congratulations! You guessed the number in ${attempts} attempts.`);
        break;
    } else if (guess < secretNumber) {
        alert("🔻 Too Low! Try a higher number.");
    } else {
        alert("🔺 Too High! Try a lower number.");
    }

    if (attempts === maxAttempts) {
        alert(`💀 Game Over! The correct number was ${secretNumber}.`);
    }
}
