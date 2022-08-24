const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default function getUsers() {
  return (
    instance
      .get('../data.json')
      // return the array of user objectse
      .then((response) => response.data.contacts)
      .catch((error) => {
        console.error(error);
      })
  );
}
