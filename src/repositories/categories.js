import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function getAllWithVideos() {
  return window.fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      const result = await serverResponse.json();
      return result;
    });
}

function getAll() {
  return window.fetch(URL_CATEGORIES)
    .then(async (serverResponse) => {
      const result = await serverResponse.json();
      return result;
    });
}

function setNewCategory(values) {
  return window.fetch(URL_CATEGORIES, {
    method: 'POST',
    body: window.JSON.stringify({ ...values }),
    headers: {
      'content-type': 'application/json',
    },
  });
}

export default {
  getAllWithVideos, setNewCategory, getAll,
};
