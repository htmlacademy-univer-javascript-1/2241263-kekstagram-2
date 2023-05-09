import { showAlert } from './util.js';
import { getData } from './api.js';
import { openUploadOverlay } from './form.js';
import { pictureFiltering } from './categories.js';

document.querySelector('#upload-file').addEventListener('change', openUploadOverlay);

getData(pictureFiltering, showAlert);
