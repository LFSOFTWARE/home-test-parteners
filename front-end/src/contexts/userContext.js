import React, { createContext, useEffect, useState } from 'react';
import { PostFile, fetchUsers } from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
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

  useEffect(() => {
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
