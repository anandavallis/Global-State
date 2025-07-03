import React from 'react';
import { UserProvider } from './context/UserContext';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';

const App = () => (
  <UserProvider>
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
      <h1>Context Demo: User Info</h1>
      <Profile />
      <Dashboard />
    </div>
  </UserProvider>
);

export default App;
