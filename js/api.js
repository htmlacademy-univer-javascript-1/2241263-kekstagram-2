const API_URL = 'https://26.javascript.pages.academy/kekstagram';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(`${API_URL}/data`);

    if (!response.ok) {
      throw new Error('Не удалось загрузить изображения');
    }

    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      API_URL,
      {
        method: 'POST',
        body,
      }
    );

    if (!response.ok) {
      throw new Error('Не удалось отправить форму. Попробуйте еще раз');
    }

    onSuccess();
  } catch(error) {
    onFail(error.message);
  }
};

export { getData, sendData };
