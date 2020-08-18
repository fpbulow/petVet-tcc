import axios from 'axios';

const api = axios.create({
    baseURL: 'http://my-json-server.typicode.com/fpbulow/petVetTcc',
});
// baseURL: 'https://jsonplaceholder.typicode.com',
// baseURL: 'http://my-json-server.typicode.com/fpbulow/petVetTcc',
export default api;
