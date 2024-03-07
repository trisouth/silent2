import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  sessionEnabled: false,
  username: '',
  setSessionEnabled: () => {},
  setUsername: () => {},
});

export const AuthProvider = ({ children }) => {
  const [sessionEnabled, setSessionEnabled] = useState(false);
  const [username, setUsername] = useState('');

  const handleAuthentication = (data) => {
    // Parse JSON response and update state
    setUsername(data.username);
    setSessionEnabled(true);
  };

  return (
    <AuthContext.Provider
      value={{ sessionEnabled, username, setSessionEnabled, setUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
};
