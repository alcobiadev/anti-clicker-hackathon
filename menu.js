function draw() {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
    }

    const hideDivsBtn = document.querySelector('#hideDivsBtn');
const divsToHide = document.querySelectorAll('.box');
hideDivsBtn.addEventListener('click', function() {
  for (let i = 0; i < divsToHide.length; i++) {
    divsToHide[i].style.display = 'none';
  }
});
}