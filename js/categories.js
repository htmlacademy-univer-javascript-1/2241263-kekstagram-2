import { addPictures } from './show-pictures.js';
import { shuffle } from './util.js';

const MAX_RANDOM_PHOTO_COUNT = 10;

const defaultFilterButton = document.getElementById('filter-default');
const randomFilterButton = document.getElementById('filter-random');
const discussedFilterButton = document.getElementById('filter-discussed');
const active = 'img-filters__button--active';

const clearPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => {
    picture.remove();
  });
};

const sortPicturesByComments = (pictureA, pictureB) => pictureA.comments.length - pictureB.comments.length;

const defaultFilter = (pictures) => {
  addPictures(pictures);

  defaultFilterButton.addEventListener('click', () => {
    clearPictures();

    discussedFilterButton.classList.remove(active);
    randomFilterButton.classList.remove(active);
    defaultFilterButton.classList.add(active);

    addPictures(pictures);
  });
};

const randomFilter = (pictures) => {
  randomFilterButton.addEventListener('click', () => {
    clearPictures();

    defaultFilterButton.classList.remove(active);
    discussedFilterButton.classList.remove(active);
    randomFilterButton.classList.add(active);

    const randomPictures = shuffle(pictures);
    addPictures(randomPictures.slice(0, MAX_RANDOM_PHOTO_COUNT));
  });
};

const discussedFilter = (pictures) => {
  discussedFilterButton.addEventListener('click', () => {
    clearPictures();

    defaultFilterButton.classList.remove(active);
    randomFilterButton.classList.remove(active);
    discussedFilterButton.classList.add(active);

    addPictures(pictures.slice().sort(sortPicturesByComments));
  });
};

const pictureFiltering = (pictures) => {
  defaultFilter(pictures);
  randomFilter(pictures);
  discussedFilter(pictures);
};

export { pictureFiltering };
