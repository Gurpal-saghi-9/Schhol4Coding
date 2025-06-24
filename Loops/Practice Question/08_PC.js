alert("You wake up in a dark forest!");

let userChoice = prompt("Enter your choice (Left - L, Right - R): ").toUpperCase();

if (userChoice === 'L') {
  alert("You walk into a swamp...");
  let choose = prompt("You see something shiny in the mud. Do you pick it up? (Yes - y or No - n): ").toLowerCase();
  
  if (choose === 'y') {
    alert("It's a magic stone! You are teleported to safety. You win!");
  } else if (choose === 'n') {
    alert("You sink slowly into the mud. Game over.");
  } else {
    alert("Invalid input!");
  }

} else if (userChoice === 'R') {
  alert("You find a cave...");
  let choose = prompt("Do you want to enter the cave? (Yes - y or No - n): ").toLowerCase();
  
  if (choose === 'y') {
    alert("A dragon wakes up and chases you away. You barely escape!");
  } else if (choose === 'n') {
    alert("You set up camp outside the cave. A peaceful night under the stars. You win!");
  } else {
    alert("Invalid input!");
  }

} else {
  alert("Invalid direction choice!");
}

// Replay option
let replay = prompt("Do you want to play again? (Yes - y or No - n): ").toLowerCase();
if (replay === 'y') {
  location.reload(); // reloads the page to restart
} else {
  alert("Thanks for playing, Guru! 😊");
}
