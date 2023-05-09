import './form-validator.js';
import { isEscapeKey } from './util.js';
import { addScale, resetScale, previewPhoto } from './scale.js';
import { filterEditor } from './filters.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const form = document.querySelector('#upload-select-image');
const uploadPhotoInput = document.querySelector('#upload-file');
const uploadPhotoOverlay = document.querySelector('.img-upload__overlay');
const uploadCancelBtn = document.querySelector('#upload-cancel');
const hashtagInput = form.querySelector('.text__hashtags');
const commentTextarea = form.querySelector('.text__description');

const errorTemplate = document.querySelector('#error').content.querySelector('section');
const successTemplate = document.querySelector('#success').content.querySelector('section');
const submitButton = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

const showMessage = (template, button, cb) => {
  const message = template.cloneNode(true);
  const removeErrorMessage = () => {
    document.body.removeChild(message);
    cb();
  };

  const windowRemoveHandler = () => {
    removeErrorMessage();
    document.removeEventListener('keydown', escRemoveHandler);
  };

  const escRemoveHandler = (evt) => {
    if (message.parentNode) {
      if (isEscapeKey(evt)) {
        document.removeEventListener('click', windowRemoveHandler);
        removeErrorMessage();
      }
    }
  };

  uploadPhotoOverlay.classList.add('hidden');
  document.body.append(message);
  document.addEventListener('click', windowRemoveHandler);

  message.querySelector('div').addEventListener('click', (evt) => {
    evt.stopPropagation();
  });

  message.querySelector(button).addEventListener('click', () => {
    removeErrorMessage();
    document.removeEventListener('click', windowRemoveHandler);
    document.removeEventListener('keydown', escRemoveHandler);
  });

  document.addEventListener('keydown', escRemoveHandler, {once: true});
  unblockSubmitButton();
};

const showSuccessForm = () => {
  showMessage(successTemplate, '.success__button', () => closeUploadOverlay());
};

const showErrorForm = () => {
  uploadPhotoOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  showMessage(errorTemplate, '.error__button',
    () => uploadPhotoOverlay.classList.remove('hidden'));
};

const openUploadOverlay = () => {
  const file = uploadPhotoInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    document.querySelector('.img-upload__preview img').src = URL.createObjectURL(file);
    uploadPhotoOverlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
  }

  addScale();
  filterEditor();

  document.addEventListener('keydown', onUploadPhotoEscKeydown);
  uploadCancelBtn.addEventListener('click', onUploadCancelBtnClick);
  hashtagInput.addEventListener('keydown', (evt) => evt.stopPropagation());
  commentTextarea.addEventListener('keydown', (evt) => evt.stopPropagation());
};

const onUploadPhotoInputChange = (evt) => {
  if (evt.target.value) {
    openUploadOverlay();
  }
};

const closeUploadOverlay = () => {
  uploadPhotoOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploadPhotoInput.innerHTML = '';
  hashtagInput.value = '';
  commentTextarea.value = '';
  previewPhoto.style.transform = 'scale(1)';
  previewPhoto.classList = ['img-upload__preview'];
  previewPhoto.style.filter = '';

  resetScale();

  document.removeEventListener('keydown', onUploadPhotoEscKeydown);
  uploadCancelBtn.removeEventListener('click', onUploadCancelBtnClick);
  hashtagInput.removeEventListener('keydown', (evt) => evt.stopPropagation());
  commentTextarea.removeEventListener('keydown', (evt) => evt.stopPropagation());

  uploadPhotoInput.value = null;
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

uploadPhotoInput.addEventListener('change', onUploadPhotoInputChange);


export { openUploadOverlay, blockSubmitButton, showSuccessForm, showErrorForm };
