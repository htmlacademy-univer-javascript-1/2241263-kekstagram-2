import './form.js';
import './formValidator.js';
import { addPicture } from './showPictures.js';
import { openUploadOverlay } from './form.js';


addPicture();
document.querySelector('#upload-file').addEventListener('change', openUploadOverlay);
