const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT_VALUE = 100;

let photoScaleValue = SCALE_DEFAULT_VALUE;

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const scaleBigger = document.querySelector('.scale__control--bigger');
const previewPhoto = document.querySelector('.img-upload__preview');

const setScale = (value) => (previewPhoto.style.transform = `scale(${value / 100})`);

const smallerScalehandler = () => {
  if (photoScaleValue - SCALE_STEP <= SCALE_MIN) {
    photoScaleValue = SCALE_MIN;
    scaleValue.value = `${photoScaleValue}%`;
    setScale(photoScaleValue);
    return;
  }

  photoScaleValue -= SCALE_STEP;
  scaleValue.value = `${photoScaleValue}%`;
  setScale(photoScaleValue);
};

const biggerScaleHandler = () => {
  if (photoScaleValue + SCALE_STEP >= SCALE_MAX) {
    photoScaleValue = SCALE_MAX;
    scaleValue.value = `${photoScaleValue}%`;
    setScale(photoScaleValue);
    return;
  }

  photoScaleValue += SCALE_STEP;
  scaleValue.value = `${photoScaleValue}%`;
  setScale(photoScaleValue);
};

const addScale = () => {
  scaleSmaller.addEventListener('click', smallerScalehandler);
  scaleBigger.addEventListener('click', biggerScaleHandler);
};

const resetScale = () => {
  photoScaleValue = SCALE_DEFAULT_VALUE;
  scaleValue.value = `${photoScaleValue}%`;
  scaleSmaller.removeEventListener('click', smallerScalehandler);
  scaleBigger.removeEventListener('click', biggerScaleHandler);
  setScale(photoScaleValue);
};

export { addScale, resetScale, previewPhoto };
