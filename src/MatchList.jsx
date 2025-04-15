import React, { useEffect, useState } from 'react';

const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/matches`);
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Грешка при зареждане на мачовете:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, []);

  if (loading) return <p>Зареждане...</p>;

  return (
    <div>
      <h2>Мачове и прогнози</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>
            <strong>{match.home}</strong> vs <strong>{match.away}</strong><br />
            Дата: {match.date} <br />
            Прогноза: <strong>{match.prediction}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MatchList;
