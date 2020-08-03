import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function setNewVideo(values) {
  return window.fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    body: window.JSON.stringify({ ...values }),
    headers: {
      'content-type': 'application/json',
    },
  });
    /* .then(async (serverResponse) => {
      const result = await serverResponse.json();
      return result;
    }); */
}

/* function setNewCategory(values) {
  return window.fetch(URL_VIDEOS, {
    method: 'POST',
    body: window.JSON.stringify({ ...values }),
    headers: {
      'content-type': 'application/json',
    },
  });
} */

export default {
  setNewVideo, /* setNewCategory, */
};
