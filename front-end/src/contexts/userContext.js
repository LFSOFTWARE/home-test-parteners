import React from 'react';
import { PostFile, fetchUsers } from '../services/userService';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [query, setQuery] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const [page, setPage] = React.useState(1);

  const nextPage = () => {
    if (users.length > 49) {
      setPage(page + 1)
    }
  }
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  }

  React.useEffect(() => {
    async function fetchData() {
      try {
        if (file) {
          await PostFile(file);
          setFile(null)
        }
  
        const users = await fetchUsers(query, page);
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchData();
  }, [file, query, page]);

  const contextValues = {
    users,
    setQuery,
    setFile,
    page,
    nextPage,
    previousPage
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};
