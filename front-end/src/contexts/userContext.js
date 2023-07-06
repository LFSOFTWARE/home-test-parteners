import React from 'react';
import { PostFile, fetchUsers } from '../services/userService';

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [query, setQuery] = React.useState(null);
  const [file, setFile] = React.useState(null);

  React.useEffect(() => {
    async function getUsers() {
      try {
        const users = await fetchUsers(query);
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    }
    getUsers();
  }, [query]);

  React.useEffect(() => {
    async function uploadFile() {
      try {
        if (file) {
          await PostFile(file);
        }
      } catch (error) {
        console.error(error);
      }
    }
    uploadFile();
  }, [file]);

  const contextValues = {
    users,
    setQuery,
    setFile
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};
