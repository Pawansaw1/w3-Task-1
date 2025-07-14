// import React, { useState } from 'react';
// import API from '../api';

// function ClaimButton({ selectedUser, onClaim }) {
//   const [loading, setLoading] = useState(false);

//   const handleClick = async () => {
//     if (!selectedUser) return;
//     setLoading(true);
//     try {
//       const res = await API.post('/claim', { userId: selectedUser });
//       onClaim(res.data);
//     } catch (err) {
//       console.error("Claim failed:", err);
//     }
//     setLoading(false);
//   };

//   return (
//     <button onClick={handleClick} disabled={!selectedUser || loading}>
//       {loading ? 'Claiming...' : '🏆Claim Random Point (1-10)'}
//     </button>
//   );
// }

// export default ClaimButton;

import React, { useState } from 'react';
import API from '../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

function ClaimButton({ selectedUser, onClaim }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!selectedUser) return;
    setLoading(true);
    try {
      const res = await API.post('/claim', { userId: selectedUser });
      onClaim(res.data);
    } catch (err) {
      console.error("Claim failed:", err);
    }
    setLoading(false);
  };

  return (
    <button onClick={handleClick} disabled={!selectedUser || loading}>
      {loading ? 'Claiming...' : (
        <>
          <FontAwesomeIcon icon={faTrophy} style={{ marginRight: '8px'}} />
          Claim Random Point (1–10)
        </>
      )}
    </button>
  );
}

export default ClaimButton;
