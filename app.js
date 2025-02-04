let maximum = parseInt(
  prompt("Enter your Maximum number in this Guessing Game")
);
while (!maximum) {
  maximum = parseInt(prompt("Enter a Valid Number! To Start the Game:"));
}
let target = Math.floor(Math.random() * maximum) + 1;

console.log(target);
let guess = prompt("Enter your first guess! OR 'q' to exit!");
let count = 1;

while (guess != target) {
  if (guess === "q") {
    break;
  } else {
    if (guess > target) {
      guess = prompt("Too High! Try again!");
      count++;
    } else if (guess < target) {
      guess = prompt("Too Low! Try Again");
      count++;
    } else {
      guess = prompt("Enter a valid Number, OR 'q' to Exit!");
    }
  }
}
if (guess === "q") {
  console.log("OK! You Quit!!!");
} else {
  console.log(`You got it in ${count} guesses`);
}
