import React, { useEffect, useState } from 'react';
import API from '../api';
import '../History.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

function History({ reload }) {
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const res = await API.get('/claim/history');
      setHistory(res.data);
    } catch (err) {
      console.error("Failed to fetch history:", err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [reload]);

  return (
    <div className="history-section">
      <h2>
        <FontAwesomeIcon icon={faClockRotateLeft} style={{ color: '#7c3aed', marginRight: '10px' }} />
        Points History
      </h2>

      <ul className="history-list">
        {history.map((item, index) => (
          <li key={index} className="history-card">
            <div className="history-info">
              <span><FontAwesomeIcon icon={faUser} /> {item.user?.name || 'Unknown'}</span>
              <small><FontAwesomeIcon icon={faCalendar} /> {new Date(item.timestamp).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</small>
            </div>
            <span className="point-badge">+{item.points} pts</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
