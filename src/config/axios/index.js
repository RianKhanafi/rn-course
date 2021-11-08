import axios from 'axios';
import {BACKEND_API} from '@env';
import errorHandler from './errorHandler';

const instance = axios.create({
  baseURL: BACKEND_API,
});

instance.interceptors.response.use(response => response.data, errorHandler);

export {default as setAuthorizationHeader} from './setAuthorization';
export default instance;
