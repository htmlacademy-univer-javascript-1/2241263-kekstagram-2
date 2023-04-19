const getId = (() => {
  let id = 1;
  return () => id++;
})();

const getPhotoId = () => {
  for (let i = 1; i <= 25; i++) {
    return i;
  }
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getId, getPhotoId, getRandomPositiveInteger, getRandomArrayElement, isEscapeKey};
