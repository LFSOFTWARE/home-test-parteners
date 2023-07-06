import axios from 'axios';


export async function fetchUsers(query) {
  try {
    let url = 'http://localhost:8080/api/users';

    if (query) {
      url = url + '?q=' + query
    }
    console.log(url);
    const response = await axios.get(url);
    const { data } = response.data;
    return data;
  } catch (error) {
    console.error('Erro ao buscar os usuários:', error);
    throw new Error('Falha ao buscar os usuários');
  }
}

export async function PostFile(file) {
  try {
    const formData = new FormData();
    formData.append("csvFile", file);

    const response = await axios.post('http://localhost:8080/api/files',formData);
    
    const { data } = response.data;
    return data;
  } catch (error) {
    throw new Error('Falha ao buscar os usuários');
  }
}