const PHOTO_COUNT = 25;

const NAMES = [
  'Вачик',
  'Яна',
  'Вика',
  'Вова',
  'Саша'
];

const COMMENTS_ID = [];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

// const checkStringLength = (string, maxLength) => string.length <= maxLength;

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getId = (() => {
  let id = 1;
  return () => id++;
})();

const getCommentId = () => {
  let id = getRandomPositiveInteger(1, 100);
  while (COMMENTS_ID.includes(id)) {
    id = getRandomPositiveInteger(1, 100);
  }
  return id;
};

const generateMessage = () => {
  const messages = [];
  for (let i = 0; i < getRandomPositiveInteger(1, 2); i++) {
    messages.push(getRandomArrayElement(MESSAGES));
  }
  return messages;
};

const createComment = () => {
  const id = getCommentId();
  const messages = generateMessage();
  return {
    id: id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: messages.join(' '),
    name: getRandomArrayElement(NAMES),
  };
};

const createPhotoDescription = () => {
  const id = getId();
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: `Описание ${id}`,
    likes: getRandomPositiveInteger(15, 200),
    comment: Array.from({length: getRandomPositiveInteger(1, 5)}, createComment),
  };
};

const photoDescription = Array.from({length: PHOTO_COUNT}, createPhotoDescription);