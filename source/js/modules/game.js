const TIME_TO_GAME = 300;
let requestId;

const startGame = () => {
  const counterMinutesElement = document.querySelector(`.game__counter-minutes`);
  const counterSecondsElement = document.querySelector(`.game__counter-seconds`);

  const startTime = Date.now();

  const tick = () => {
    const passedTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = TIME_TO_GAME - passedTime;

    const remainingSeconds = remainingTime % 60;
    const remainingMinutes = Math.floor(remainingTime / 60);

    counterMinutesElement.textContent = remainingMinutes < 10 ? `0${remainingMinutes}` : remainingMinutes;
    counterSecondsElement.textContent = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;

    requestId = requestAnimationFrame(tick);
  };

  requestId = requestAnimationFrame(tick);
};

const stopGame = () => {
  cancelAnimationFrame(requestId);
};

export const initGame = () => {
  document.body.addEventListener(`screenChanged`, (event) => {
    if (event.detail.screenName === `game`) {
      startGame();
    } else {
      stopGame();
    }
  });
};
