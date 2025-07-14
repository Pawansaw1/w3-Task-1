import React, { useState, useEffect } from 'react';
import UserSelector from './components/UserSelector';
import ClaimButton from './components/ClaimButton';
import Leaderboard from './components/Leaderboard';
import History from './components/History'; 
import Summary from './components/Summary'; 
import API from './api';
import './App.css';

function App() {
  const [selectedUser, setSelectedUser] = useState('');
  const [users, setUsers] = useState([]);
  const [lastPoints, setLastPoints] = useState(null);
  const [reloadHistory, setReloadHistory] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await API.get('/users');
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClaim = ({ points, users }) => {
    setLastPoints(points);
    setUsers(users);
    setReloadHistory(prev => !prev); 
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🏆Leaderboard System </h1>
        <p className="text-lg text-muted-foreground">
            Select a user, claim random points, and watch the leaderboard update in real-time!
          </p>

        <UserSelector
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          refreshUsers={fetchUsers}
        />

        <ClaimButton
          selectedUser={selectedUser}
          onClaim={handleClaim}
        />

        {lastPoints && <p>Claimed {lastPoints} points!</p>}

        <Leaderboard users={users} />

        <History reload={reloadHistory} />

        <Summary />
      </div>
    </div>
  );
}

export default App;
