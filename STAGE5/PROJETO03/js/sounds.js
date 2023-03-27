export default function () {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const forestAudio = new Audio("assets/Floresta.wav");
  const rainAudio = new Audio("assets/Chuva.wav");
  const coffeeAudio = new Audio("assets/Cafeteria.wav");
  const fireAudio = new Audio("assets/Lareira.wav");

  forestAudio.loop = true;
  raindAudio.loop = true;
  coffeeAudio.loop = true;
  fireAudio.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  }

  function timeEnd() {
    kitchenTimer.play();
  }

  return {
    pressButton,
    timeEnd,
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireAudio,
  };
}
