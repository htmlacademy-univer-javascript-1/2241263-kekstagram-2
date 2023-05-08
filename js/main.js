import { addPictures } from './show-pictures.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import { openUploadOverlay } from './form.js';

document.querySelector('#upload-file').addEventListener('change', openUploadOverlay);

getData(addPictures, showAlert);
