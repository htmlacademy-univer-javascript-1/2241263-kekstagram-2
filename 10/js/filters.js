const previewPhoto = document.querySelector('.img-upload__preview');
const slider = document.querySelector('.img-upload__effect-level');
const sliderValue = slider.querySelector('.effect-level__value');
const sliderElement = slider.querySelector('.effect-level__slider');
const effectButtons = document.querySelectorAll('.effects__radio');

sliderValue.value = 100;
slider.style.display = 'none';

const filters = {
  none: [0, 100, 1, '', ''],
  chrome: [0, 1, 0.1, 'grayscale', ''],
  sepia: [0, 1, 0.1, 'sepia', ''],
  marvin: [0, 100, 1, 'invert', '%'],
  phobos: [0, 3, 0.1, 'blur', 'px'],
  heat: [1, 3, 0.1, 'brightness', '']
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1,
  connect: 'lower'
});

const filterOptions = (filterName, filter) => {
  slider.style.display = 'block';

  previewPhoto.classList.add(`effect__preview--${filterName}`);

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: filter[0],
      max: filter[1]
    },
    start: filter[1],
    step: filter[2]
  });

  sliderElement.noUiSlider.on('update', () => {
    sliderValue.value = sliderElement.noUiSlider.get();
    previewPhoto.style.filter = `${filter[3]}(${sliderValue.value + filter[4]})`;
  });
};

const filterEditor = () => {
  effectButtons.forEach((effectButton) => {
    effectButton.addEventListener('change', () => {
      const filterName = effectButton.value;

      filterOptions(filterName, filters[filterName]);

      if (filterName === 'none') {
        slider.style.display = 'none';
        previewPhoto.style.filter = '';
      }
    });
  });
};

export { filterEditor };
