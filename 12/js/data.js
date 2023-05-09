import { getId, getRandomPositiveInteger, getRandomUniqNumber, getRandomArrayElement } from './util.js';

const NAMES = [
  'Вачик',
  'Яна',
  'Вика',
  'Вова',
  'Саша'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const generateMessage = () => {
  const messages = [];
  const messageCount = getRandomPositiveInteger(1, 2);
  for (let i = 0; i < messageCount; i++) {
    messages.push(getRandomArrayElement(MESSAGES));
  }
  return messages;
};

const createComment = () => {
  const messages = generateMessage();
  return {
    id: getRandomUniqNumber(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: messages.join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

const publicationId = getRandomUniqNumber(1, 25);
const photoId = getRandomUniqNumber(1, 25);
const descriptionId = getId();

const createPhotoDescription = function() {
  return {
    id: publicationId(),
    url: `photos/${photoId()}.jpg`,
    description: `Описание ${descriptionId()}`,
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(0, 10)}, createComment),
  };
};

export { createPhotoDescription };
