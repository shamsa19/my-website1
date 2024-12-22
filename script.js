// Game Show Puzzle Logic
const correctLetter = "2631";  // The letter to guess (could be a fun, meaningful one like "B" for "Birthday")
const submitButton = document.getElementById("submit-letter");
const inputField = document.getElementById("letter-input");
const message = document.getElementById("message");
const puzzleClue = document.getElementById("puzzle-clue");
const nextButton = document.getElementById("next-step");

// When the user clicks the "Submit" button
submitButton.addEventListener("click", function() {
  const userGuess = inputField.value.toUpperCase(); 

  if (userGuess === correctLetter) {
    message.style.display = "block";  
    nextButton.style.display = "block";
    puzzleClue.style.display = "none"; 
  } else {
    puzzleClue.style.display = "block"; 
    alert("Oops! Try again and guess the right letter!"); 
  }
});

// Function to generate random circles
function generateRandomCircles(numCircles) {
  const body = document.body;
  
  for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    
    // Random size between 20px and 50px
    const size = Math.floor(Math.random() * 30) + 20;  // random size between 20px and 50px
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    
    // Random position within the viewport
    const xPosition = Math.floor(Math.random() * window.innerWidth);
    const yPosition = Math.floor(Math.random() * window.innerHeight);
    
    circle.style.top = `${yPosition}px`;
    circle.style.left = `${xPosition}px`;
    
    // Append the circle to the body
    body.appendChild(circle);
  }
}

// Generate 12 random circles on page load (you can change the number)
generateRandomCircles(12);
