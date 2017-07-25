import api from '../config/api';

function getTodos() {
  return api.get('/todos');
}

export default {
  getTodos
};
