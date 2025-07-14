
import React from 'react';
import '../Leaderboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCrown,
  faTrophy,
  faMedal,
  faAward
} from '@fortawesome/free-solid-svg-icons';

function Leaderboard({ users }) {
  const getRankStyle = (index) => {
    switch (index) {
      case 0:
        return { bg: 'gold-bg', icon: faCrown, color: 'gold' };
      case 1:
        return { bg: 'silver-bg', icon: faTrophy, color: 'silver' };
      case 2:
        return { bg: 'bronze-bg', icon: faMedal, color: 'orange' };
      default:
        return { bg: 'normal-bg', icon: faAward, color: 'gray' };
    }
  };

  return (
    <div className="leaderboard-container">
      <h2>
        <FontAwesomeIcon icon={faTrophy} style={{ color: '#7c3aed', marginRight: '10px' }}   />
        Leaderboard
      </h2>
      <ul className="leaderboard-list">
        {users.map((user, index) => {
          const rank = getRankStyle(index);
          return (
            <li key={user._id} className={`leaderboard-card ${rank.bg}`}>
              <div className="left">
                <FontAwesomeIcon
                  icon={rank.icon}
                  className={`rank-icon ${rank.color === 'orange' ? 'orange' : rank.color}`}
                />
                <span className="rank-badge">#{index + 1}</span>
                <span className="user-name">{user.name}</span>
              </div>
              <div className="points-block">
                <div className="point-value">{user.totalPoints}</div>
                <div className="point-label">points</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Leaderboard;
