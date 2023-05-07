import './form-validator.js';
import { isEscapeKey } from './util.js';
import { addScale, resetScale } from './scale.js';
import { filterEditor } from './filters.js';

const form = document.querySelector('#upload-select-image');
const uploadPhotoInput = document.querySelector('#upload-file');
const uploadPhotoOverlay = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const onUploadPhotoInputChange = (evt) => {
  if (evt.target.value) {
    openUploadOverlay();
  }
};

const onUploadPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadOverlay();
  }
};

const onUploadCancelBtnClick = () => {
  closeUploadOverlay();
};

const openUploadOverlay = () => {
  uploadPhotoOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');

  addScale();
  filterEditor();

  document.addEventListener('keydown', onUploadPhotoEscKeydown);
  uploadCancelBtn.addEventListener('click', onUploadCancelBtnClick);
  hashtagInput.addEventListener('keydown', (evt) => evt.stopPropagation());
  commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());
};

const closeUploadOverlay = () => {
  uploadPhotoOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  resetScale();

  document.removeEventListener('keydown', onUploadPhotoEscKeydown);
  uploadCancelBtn.removeEventListener('click', onUploadCancelBtnClick);
  hashtagInput.removeEventListener('keydown', (evt) => evt.stopPropagation());
  commentInput.removeEventListener('keydown', (evt) => evt.stopPropagation());

  uploadPhotoInput.value = null;
};

uploadPhotoInput.addEventListener('change', onUploadPhotoInputChange);

export { openUploadOverlay };
