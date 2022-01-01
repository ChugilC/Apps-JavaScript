window.addEventListener("keydown", (e) => {
  // audio tag
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // specific key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  // rewind
  audio.currentTime = 0;
  audio.play();
  // add transition
  key.classList.add("playing");

  // remove transition
  const removeTrans = (e) => {
    if (e.propertyName !== "transform") {
      return;
    }
    e.target.classList.remove("playing");
  };

  // remove transition event
  const keys = document.querySelectorAll(".key");
  keys.forEach((num) => num.addEventListener("transitionend", removeTrans));
});
