import { getId, getRandomPositiveInteger, getRandomArrayElement } from './util.js';

const PHOTO_COUNT = 25;

const NAMES = [
  'Вачик',
  'Яна',
  'Вика',
  'Вова',
  'Саша'
];

const PHOTOS_ID = [];

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
  for (let i = 0; i < getRandomPositiveInteger(1, 2); i++) {
    messages.push(getRandomArrayElement(MESSAGES));
  }
  return messages;
};

const getPhotoId = () => {
  const id = getRandomPositiveInteger(1, 25);
  while (!PHOTOS_ID.includes(id)) {
    PHOTOS_ID.push(id);
  }
  return id;
};

const createComment = () => {
  const messages = generateMessage();
  return {
    id: getId(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: messages.join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhotoDescription = () => {
  const photoId = getPhotoId();
  return {
    id: photoId,
    url: `photos/${photoId}.jpg`,
    description: `Описание ${photoId}`,
    likes: getRandomPositiveInteger(15, 200),
    comment: Array.from({length: getRandomPositiveInteger(1, 5)}, createComment),
  };
};

const photoDescription = () => Array.from({length: PHOTO_COUNT}, createPhotoDescription);

export {photoDescription};