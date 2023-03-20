import { photoDescription } from './data.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('a');

const photos = photoDescription();

const pictureFragment = document.createDocumentFragment();

photos.forEach(({url, likes, comment}) => {
  const photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('.picture__img').src = url;
  photoElement.querySelector('.picture__likes').textContent = likes;
  photoElement.querySelector('.picture__comments').textContent = comment.length;
  pictureFragment.appendChild(photoElement);
});

pictureList.appendChild(pictureFragment);

export { pictureList };
