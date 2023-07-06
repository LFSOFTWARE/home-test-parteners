import axios from 'axios';


export async function fetchUsers(query) {
  try {
    let url = 'http://localhost:8080/api/users';

    if(query){
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