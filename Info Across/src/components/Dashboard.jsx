import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', margin: '1rem 0' }}>
      <h2>Dashboard</h2>
      <p>Welcome back, <strong>{user.name}</strong>!</p>
    </div>
  );
};

export default Dashboard;
