import React, { useEffect, useState } from 'react';

function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await fetch('https://make-some-money-backend-production.up.railway.app/matches');
        const data = await response.json();
        if (data && data.fixtures) {
          setMatches(data.fixtures);
        }
      } catch (error) {
        console.error("Грешка при зареждане на мачовете:", error);
      }
    }

    fetchMatches();
  }, []);

  return (
    <div>
      <h2>Мачове за днес</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Мач</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Час</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Прогноза</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{match.home} vs {match.away}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{match.date}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>Очаква се</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchList;
