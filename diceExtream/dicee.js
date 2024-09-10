// Variables to store dice numbers
var randomnumber, randomnumber1;

// Add dice roll animation
function rollDiceAnimation() {
  randomnumber = Math.floor(Math.random() * 6) + 1;
  randomnumber1 = Math.floor(Math.random() * 6) + 1;

  const dice = document.querySelectorAll("img");
  dice.forEach(die => {
    die.classList.add("roll");
  });

  setTimeout(() => {
    dice.forEach(die => {
      die.classList.remove("roll");
    });
    displayResults(); // Show results after animation
  }, 1000);
}

// Display results after rolling the dice
function displayResults() {
  document.querySelector(".img1").setAttribute("src", "./images/dice" + randomnumber + ".png");
  document.querySelector(".img2").setAttribute("src", "./images/dice" + randomnumber1 + ".png");

  if (randomnumber > randomnumber1) {
    document.querySelector("h1").textContent = " Player 1 Wins!";
  } else if (randomnumber === randomnumber1) {
    document.querySelector("h1").textContent = "It's a Draw!!!";
  } else {
    document.querySelector("h1").textContent = " Player 2 Wins!";
  }
}

// Button to roll the dice and refresh the page
document.getElementById("rollDiceBtn").addEventListener("click", function() {
  rollDiceAnimation(); // Trigger dice roll and animation
});

// Add theme change functionality
function changeTheme() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}
