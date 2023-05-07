import { createBigPicture } from './show-full-picture.js';

const pictureList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture');

const pictureFragment = document.createDocumentFragment();

const addPicture = (descriptions) => {
  descriptions.forEach((photo) => {
    const photoElement = pictureTemplate.cloneNode(true).content;
    const pictureImage = photoElement.querySelector('.picture__img');
    const pictureLikes = photoElement.querySelector('.picture__likes');
    const pictureComments =  photoElement.querySelector('.picture__comments');

    pictureImage.src = photo.url;
    pictureLikes.textContent = photo.likes;
    pictureComments.textContent = photo.comments.length;

    pictureImage.addEventListener('click', (evt) => {
      evt.preventDefault();
      createBigPicture(photo, pictureLikes.textContent, photo.description, photo.comments);
    });
    pictureFragment.appendChild(photoElement);
  });

  pictureList.appendChild(pictureFragment);
};

export { addPicture };
