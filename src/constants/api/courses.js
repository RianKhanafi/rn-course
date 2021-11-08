import axios from '~/config/axios';
export default {
  courses: params =>
    axios.get('/courses', {params: {...params}}).then(res => res.data),
  coursesDetail: id => axios.get(`/courses/${id}`).then(res => res.data),
};
