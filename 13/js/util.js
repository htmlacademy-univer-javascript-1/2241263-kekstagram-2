const ALERT_SHOW_TIME = 10000;

const getId = () => {
  let id = 0;
  return () => {
    id++;
    return id;
  };
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomUniqNumber = function(from, to) {
  const previousValues = [];
  return function () {
    let currentValue = getRandomPositiveInteger(from, to);

    while (previousValues.includes(currentValue)) {
      currentValue = getRandomPositiveInteger(from, to);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const checkStringLenght = (str, maxLenght) => str.length <= maxLenght;

const isEscapeKey = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

const debounce = (cb, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb.apply(this, rest), timeoutDelay);
  };
};

const throttle = (cb, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      cb.apply(this, rest);
      lastTime = now;
    }
  };
};

const shuffle = (array) => {
  const newArray = Array.from(new Set(array));
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export {
  getId,
  getRandomPositiveInteger,
  getRandomUniqNumber,
  getRandomArrayElement,
  checkStringLenght,
  isEscapeKey,
  showAlert,
  debounce,
  throttle,
  shuffle,
};
