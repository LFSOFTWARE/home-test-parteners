import axios from 'axios';


export async function fetchUsers(query) {
  try {
    const url = `http://localhost:8080/api/users${query ? `?q=${query}` : ''}`;

    const response = await axios.get(url);
    const { data } = response.data;

    return data;
  } catch (error) {
    throw new Error('Falha ao buscar os usuários');
  }
}

export async function PostFile(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post('http://localhost:8080/api/files', formData);
    const { data } = response.data;

    return data;
  } catch (error) {
    throw new Error('Falha ao buscar os usuários');
  }
}