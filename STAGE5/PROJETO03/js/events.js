import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonForestOff,
  buttonForestOn,
  buttonRainOff,
  buttonRainOn,
  buttonCoffeeOff,
  buttonCoffeeOn,
  buttonFireOff,
  buttonFireOn,
  buttonStop,
  buttonAdd,
  buttonSub,
} from "./elements.js";

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  // SOUND

  buttonForestOn.addEventListener("click", function () {
    sound.pressButton();
    buttonForestOn.classList.add("hide");
    buttonForestOff.classList.remove("hide");
    sound.forestAudio.pause();
  });

  buttonForestOff.addEventListener("click", function () {
    sound.pressButton();
    buttonForestOff.classList.add("hide");
    buttonForestOn.classList.remove("hide");
    sound.forestAudio.play();
    
  });

  buttonRainOn.addEventListener("click", function () {
    sound.pressButton();
    buttonRainOn.classList.add("hide");
    buttonRainOff.classList.remove("hide");
    sound.rainAudio.pause();
  });

  buttonRainOff.addEventListener("click", function () {
    sound.pressButton();
    buttonRainOff.classList.add("hide");
    buttonRainOn.classList.remove("hide");
    sound.rainAudio.play();
  });

  buttonCoffeeOn.addEventListener("click", function () {
    sound.pressButton();
    buttonCoffeeOn.classList.add("hide");
    buttonCoffeeOff.classList.remove("hide");
    sound.coffeeAudio.pause();
  });

  buttonCoffeeOff.addEventListener("click", function () {
    sound.pressButton();
    buttonCoffeeOff.classList.add("hide");
    buttonCoffeeOn.classList.remove("hide");
    sound.coffeeAudio.play();
  });

  buttonFireOn.addEventListener("click", function () {
    sound.pressButton();
    buttonFireOn.classList.add("hide");
    buttonFireOff.classList.remove("hide");
    sound.fireAudio.pause();
  });

  buttonFireOff.addEventListener("click", function () {
    sound.pressButton();
    buttonFireOff.classList.add("hide");
    buttonFireOn.classList.remove("hide");
    sound.fireAudio.play();
  });

  buttonSet.addEventListener("click", function () {
    sound.pressButton();
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });

  buttonAdd.addEventListener("click", function () {
    sound.pressButton();
    timer.addMinutes();
  });

  buttonSub.addEventListener("click", function () {
    sound.pressButton();
    timer.subMinutes();
  });
}
