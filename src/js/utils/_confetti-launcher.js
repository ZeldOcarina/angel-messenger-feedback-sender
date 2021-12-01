const confetti = require("canvas-confetti");

export class ConfettiLauncher {
  shootConfetti(time = 5000) {
    const confettiCanvas = document.createElement("canvas");
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    confettiCanvas.style.position = "fixed";
    confettiCanvas.style.top = 0;
    confettiCanvas.style.left = 0;
    document.body.insertBefore(confettiCanvas, document.body.firstChild);

    const myConfetti = confetti.create(confettiCanvas, {
      resize: true,
      useWorker: true,
    });

    var duration = time;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      myConfetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      // and launch a few from the right edge
      myConfetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}
