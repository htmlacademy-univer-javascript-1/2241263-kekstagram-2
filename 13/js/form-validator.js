import { sendData } from './api.js';
import { blockSubmitButton, showErrorForm, showSuccessForm } from './form.js';
import { checkStringLenght } from './util.js';

const pictureForm = document.querySelector('#upload-select-image');
const hashtagInput = pictureForm.querySelector('.text__hashtags');
const commentTextarea = pictureForm.querySelector('.text__description');

const MAX_HASH_TAGS_COUNT = 5;
const MAX_COMMENT_LENGTH = 140;

export const pristine = new Pristine(pictureForm, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--invalid',
  successClass: 'img-upload__field-wrapper--valid',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'span',
  errorTextClass: 'img-upload__field__error'
});

function validateHashTags(hashTagString) {
  if (hashTagString.length === 0) {
    return true;
  }

  const regex = /^((#[A-Za-zА-Яа-яЁё0-9]{1,19})\s*|)+$$/;

  const hashTags = hashTagString.trim().split(/\s+/);

  if (hashTags.length > MAX_HASH_TAGS_COUNT) {
    return false;
  }

  const tagSet = new Set();

  for (let hashTag of hashTags) {
    if (!regex.test(hashTag)) {
      return false;
    }

    hashTag = hashTag.toLowerCase();

    if (tagSet.has(hashTag)) {
      return false;
    }
    tagSet.add(hashTag);
  }

  return true;
}

const validateComment = () => checkStringLenght(commentTextarea.value, MAX_COMMENT_LENGTH);

pristine.addValidator(
  hashtagInput,
  validateHashTags,
  'Максимальное допустимое кол-во хэш-тегов: 5. Недопустимы одинаковые хэш-теги и спецсимволы.'
);

pristine.addValidator(
  commentTextarea,
  validateComment,
  'Максимальное количество символов: 140'
);

pictureForm.addEventListener('submit', (evt) => {
  if (pristine.validate()) {
    blockSubmitButton();
    const form = new FormData(evt.target);
    sendData(showSuccessForm, showErrorForm, form);
  }
  evt.preventDefault();
});
