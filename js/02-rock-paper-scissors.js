// Prompt the user for their choice
let userChoice = window.prompt("Enter rock, paper, or scissors:");

// Convert the user's input to lowercase
userChoice = userChoice.toLowerCase();

// Generate the computer's choice (0, 1, or 2)
let computerChoice = Math.floor(Math.random() * 3);

// Convert the number to rock, paper, or scissors
if (computerChoice === 0) {
    computerChoice = "rock";
} else if (computerChoice === 1) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

// Check if the user's input is valid
if (
    userChoice !== "rock" &&
    userChoice !== "paper" &&
    userChoice !== "scissors"
) {
    window.alert("Invalid choice! Please enter rock, paper, or scissors.");
} else {

    // Display both choices
    let message = "You chose: " + userChoice +
                  "\nComputer chose: " + computerChoice + "\n";

    // Determine the winner
    if (userChoice === computerChoice) {
        message += "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        message += "Congratulations! You win!";
    } else {
        message += "Computer wins!";
    }

    // Display the result
    window.alert(message);
}