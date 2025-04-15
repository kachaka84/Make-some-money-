
import React from 'react';
import MatchList from './MatchList';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Прогнозаторът на Вачев</h1>
      <MatchList />
    </div>
  );
}

export default App;
import MatchList from './MatchList';

function App() {
  return (
    <div className="App">
      <h1>Прогнозаторът на Вачев</h1>
      <MatchList />
    </div>
  );
}

export default App;
