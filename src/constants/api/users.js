import axios from '~/config/axios';
export default {
  login: credential => axios.post('/users/login', credential),
  register: payload => axios.post('/users/register', payload),
};
