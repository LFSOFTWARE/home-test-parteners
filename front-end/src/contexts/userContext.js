
import React, { createContext, useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState(null);

  async function getUsers() {
    try {
      const users = await fetchUsers();
      setUsers(users);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    const getUsersBySearch = async () => {
      try {
        const users = await fetchUsers(query);
        setUsers(users);
      } catch (error) {
        console.error(error);
      }
    }
    getUsersBySearch();
  }, [query])

  const contextValues = {
    users,
    setQuery
  };

  return (
    <UserContext.Provider value={contextValues}>
      {children}
    </UserContext.Provider>
  );
};
