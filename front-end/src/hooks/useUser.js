import React from 'react';
import { UserContext } from '../contexts/userContext';

export function useUser() {
  return React.useContext(UserContext);
}
