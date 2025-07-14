import React, { useState, useEffect } from 'react';
import API from '../api';

function UserSelector({ selectedUser, setSelectedUser, refreshUsers }) {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState('');

  const fetchUsers = async () => {
    const res = await API.get('/users');
    setUsers(res.data);
  };

  const addUser = async () => {
    if (!newUser.trim()) return alert('Please enter a valid name');
    await API.post('/users', { name: newUser });
    setNewUser('');
    fetchUsers();
    refreshUsers(); 
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <select value={selectedUser} onChange={e => setSelectedUser(e.target.value)}>
        <option value=''>Select User</option>
        {users.map(user => (
          <option key={user._id} value={user._id}>{user.name}</option>
        ))}
      </select>
      <input
        value={newUser}
        onChange={e => setNewUser(e.target.value)}
        placeholder="New User"
        autoFocus
      />
      <button onClick={addUser}>Add</button>
    </div>
  );
}

export default UserSelector;
