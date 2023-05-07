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

export {
  getId,
  getRandomPositiveInteger,
  getRandomUniqNumber,
  getRandomArrayElement,
  checkStringLenght,
  isEscapeKey,
};
