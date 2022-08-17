const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default async function getUsers() {
  return (
    instance
      .get('../data.json')
      // .get(url, { params: params })
      .then((response) => response.data.contacts)
      .catch((error) => {
        console.error(error);
      })
  );
}
