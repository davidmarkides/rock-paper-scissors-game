function getComputerChoice() {
    const randomChoice = Math.random();
    if (randomChoice < 0.33) {
      return 'rock';
    } else if (randomChoice < 0.66) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(playerChoice)) {
      return "Invalid choice";
    }
    if (playerChoice === computerSelection) {
      return "tie";
    } else if (
      (playerChoice === "rock" && computerSelection === "scissors") ||
      (playerChoice === "scissors" && computerSelection === "paper") ||
      (playerChoice === "paper" && computerSelection === "rock")
    ) {
      return "win";
    } else {
      return "lose";
    }
  }
  
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  function game() {
    let wins = 0;
    let losses = 0;
    let ties = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Choose rock, paper, or scissors:");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
  
      if (result === "win") {
        console.log(`You Win! ${capitalizeFirstLetter(playerSelection)} beats ${computerSelection}`);
        wins++;
      } else if (result === "lose") {
        console.log(`You Lose! ${capitalizeFirstLetter(computerSelection)} beats ${playerSelection}`);
        losses++;
      } else if (result === "tie") {
        console.log("It's a tie!");
        ties++;
      } else {
        console.log("Invalid choice");
      }
    }
  
    console.log(`Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
    
    if (wins > losses) {
      console.log("You are the overall winner!");
    } else if (losses > wins) {
      console.log("You are the overall loser!");
    } else {
      console.log("The overall game is a tie!");
    }
  }
  
  game();
  