const getTransitionString = ({
  property = `all`,
  duration = 0,
  timingFunction = `ease`,
  delay = 0
}) => (
  `${property} ${duration}ms ${timingFunction} ${delay}ms`
);

export const slideTextBottom = (
    elementSelector,
    duration,
    property,
    delay = 0,
    timeOffsetDelta = 100
) => {
  const node = document.querySelector(elementSelector);

  if (!node || node.children.length) {
    return;
  }

  const words = node.textContent.split(` `);
  const fragment = new DocumentFragment();
  let timeOffset = 0;

  words.forEach((word) => {
    const spanWrapper = document.createElement(`span`);
    spanWrapper.classList.add(`slide-text-bottom-word`);

    word.split(``).forEach((letter) => {
      const span = document.createElement(`span`);
      span.classList.add(`slide-text-bottom-letter`);


      span.append(letter);

      const randomOffset = Math.random() * timeOffsetDelta * 2;
      span.style.transition = getTransitionString({property, duration, delay: delay + timeOffset + randomOffset});

      spanWrapper.append(span);
    });

    timeOffset += timeOffsetDelta;

    fragment.append(spanWrapper);
  });

  node.textContent = ``;
  node.append(fragment);
};
