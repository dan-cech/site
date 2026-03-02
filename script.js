const buttons = document.querySelectorAll(".sound-btn");
const sound = new Audio("mouseclick.mp3");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    sound.currentTime = 0;
    sound.play();
  });
});