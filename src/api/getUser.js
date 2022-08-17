import _ from 'lodash';

const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default async function getUser(id) {
  console.log('hey im user');
  return instance
    .get('./data.json')
    .then((response) => {
      const users = response.data.contacts;
      const user = _.find(users, { id });
      return user;
    })
    .catch((error) => {
      console.error(error);
    });
}
