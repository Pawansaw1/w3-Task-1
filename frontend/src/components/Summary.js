import React, { useEffect, useState } from 'react';
import API from '../api';
import '../Summary.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faRectangleList } from '@fortawesome/free-solid-svg-icons';


function Summary() {
  const [summary, setSummary] = useState({
    totalUsers: 0,
    totalClaims: 0,
    totalPoints: 0
  });

  useEffect(() => {
    API.get('/users/summary').then(res => setSummary(res.data));
  }, []);

  return (
    <div className="summary-row">
      <h2>
        <FontAwesomeIcon icon={faRectangleList} style={{ color: '#7c3aed', marginRight: '1px' }} />
        Summary
      </h2>

      <div className="summary-card purple">
        <h3>{summary.totalUsers}</h3>
        <p>Total Users</p>
      </div>
      <div className="summary-card green">
        <h3>{summary.totalClaims}</h3>
        <p>Points Claimed</p>
      </div>
      <div className="summary-card purple">
        <h3>{summary.totalPoints}</h3>
        <p>Total Points</p>
      </div>
    </div>
  );
}

export default Summary;
