// Game Show Clue Logic for clue2.html (and similar for clue3.html, clue4.html, etc.)
const answerButtons = document.querySelectorAll('.answer');
const feedbackMessage = document.querySelector('.feedback');
const nextButton = document.getElementById("next-step");

answerButtons.forEach(button => {
  button.addEventListener('click', function () {
    // Check if the selected answer is correct
    if (button.getAttribute('data-correct') === 'true') {
      feedbackMessage.style.display = 'block'; // Show feedback message
      nextButton.style.display = 'block'; // Show the "Next" button
    } else {
      alert("Oops! That's not quite right. Try again!");
    }
  });
});
