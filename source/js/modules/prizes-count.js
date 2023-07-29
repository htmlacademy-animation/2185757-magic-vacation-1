const SUITCASE_COUNT = 7;
const CONSOLATION_PRIZE_COUNT = 900;

const SUITCASE_DELAY = 1100;
const CONSOLATION_PRIZE_DELAY = 1300;

const animatePrizesCount = () => {
  const prizesCountElements = document.querySelectorAll(`.prizes__desc b`);
  const secondsPerFrame = 1000 / 12;
  const startTime = Date.now();
  let previousFrame = 0;

  let currentSuitcaseCount = 1;
  let currentConsolationPrizeCount = 11;

  prizesCountElements[1].textContent = currentSuitcaseCount;
  prizesCountElements[2].textContent = currentConsolationPrizeCount;

  const tick = () => {
    const currentTime = Date.now();

    if (currentTime - previousFrame >= secondsPerFrame) {
      if (currentTime - startTime >= SUITCASE_DELAY && currentSuitcaseCount < SUITCASE_COUNT) {
        currentSuitcaseCount++;
        prizesCountElements[1].textContent = currentSuitcaseCount;
      }

      if (currentTime - startTime >= CONSOLATION_PRIZE_DELAY && currentConsolationPrizeCount < CONSOLATION_PRIZE_COUNT) {
        currentConsolationPrizeCount += CONSOLATION_PRIZE_COUNT / 6;
        currentConsolationPrizeCount =
          currentConsolationPrizeCount > CONSOLATION_PRIZE_COUNT ?
            CONSOLATION_PRIZE_COUNT : currentConsolationPrizeCount;

        prizesCountElements[2].textContent = currentConsolationPrizeCount;
      }
    }

    if (currentSuitcaseCount < SUITCASE_COUNT || currentConsolationPrizeCount < CONSOLATION_PRIZE_COUNT) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

export const initPrizesCount = () => {
  document.body.addEventListener(`screenChanged`, (event) => {
    if (event.detail.screenName === `prizes`) {
      animatePrizesCount();
    }
  });
};
