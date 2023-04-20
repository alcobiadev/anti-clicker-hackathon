function draw() {
  
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        let audio = new Audio("resources/277403__landlucky__game-over-sfx-and-voice.wav");
        audio.play;
      }

    const hideDivsBtn = document.querySelector('#hideDivsBtn');
const divsToHide = document.querySelectorAll('.box');
hideDivsBtn.addEventListener('click', function() {
  for (let i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = 'none';
  }
});
}