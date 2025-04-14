import React, { useEffect, useState } from 'react';

function MatchList() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    async function fetchMatches() {
      try {
        const response = await fetch('https://www.thesportsdb.com/api/v1/json/1/eventsday.php?d=2024-04-14&s=Soccer');
        const data = await response.json();
        if (data && data.events) {
          const limited = data.events.slice(0, 10).map(event => ({
            teams: `${event.strHomeTeam} vs ${event.strAwayTeam}`,
            time: event.strTime,
            prediction: (Math.random() * 3.5 > 2.5 ? 'Над 2.5 гола' : 'Под 2.5 гола')
          }));
          setMatches(limited);
        }
      } catch (error) {
        console.error("Грешка при зареждане на мачове:", error);
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
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Голове</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{match.teams}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{match.time}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{match.prediction}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MatchList;
