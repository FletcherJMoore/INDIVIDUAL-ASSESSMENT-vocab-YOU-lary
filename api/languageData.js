import client from '../utils/client';

const endpoint = client.databaseURL;

// GET TECH
const getTech = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json(uid))
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

export default getTech;
