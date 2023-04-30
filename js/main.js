import './form.js';
import './formValidator.js';
import { addPicture } from './showPictures.js';
import { createPhotoDescription } from './data.js';
import { openUploadOverlay } from './form.js';

const PHOTO_COUNT = 25;

const generatePhotoDescription = Array.from({length: PHOTO_COUNT}, createPhotoDescription);

addPicture(generatePhotoDescription);

document.querySelector('#upload-file').addEventListener('change', openUploadOverlay);
