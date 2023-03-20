import { createPhotoDescription, PHOTO_COUNT } from './data.js';

const photoDescription = () => Array.from({length: PHOTO_COUNT}, createPhotoDescription);
