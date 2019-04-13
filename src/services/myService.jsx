import axios from 'axios';

export async function getUsers() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
    return resp;
  });
  return response.data;
}

export async function getUserById(id) {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id).then(resp => {
    return resp;
  });
  return response.data;

}