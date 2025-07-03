import React, { createContext, useState } from 'react';

// 1️⃣ Create the context
export const UserContext = createContext(null);

// 2️⃣ Export a provider component
export const UserProvider = ({ children }) => {
  // This could come from an API, auth, etc.
  const [user, setUser] = useState({
    id: 1,
    name: 'Anandavalli S',
    email: 'anandavalli@example.com'
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
