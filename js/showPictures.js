import { photoDescription } from './data.js';
import { showBigPhoto } from './showFullPicture.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

const description = photoDescription();

const addPicture = () => {
  const pictureFragment = document.createDocumentFragment();
  for (const item of description) {
    const photoElement = pictureTemplate.cloneNode(true).content;
    photoElement.querySelector('.picture__img').src = item.url;
    photoElement.querySelector('.picture__img').addEventListener('click', (evt) => {
      evt.preventDefault();
      showBigPhoto(item);
    });
    photoElement.querySelector('.picture__likes').textContent = item.likes;
    photoElement.querySelector('.picture__comments').textContent = item.comments.length;
    pictureFragment.appendChild(photoElement);
  }
  pictureList.appendChild(pictureFragment);
};

export { addPicture };
