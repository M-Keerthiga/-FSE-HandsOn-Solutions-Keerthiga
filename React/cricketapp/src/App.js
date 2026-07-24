import React from 'react';
import ListofPlayers from './components/ListofPlayers';
import IndianPlayers from './components/IndianPlayers';

function App() {
  const flag = true;

  if (flag) {
    return (
      <div className="App">
        <ListofPlayers />
      </div>
    );
  }

  return (
    <div className="App">
      <IndianPlayers />
    </div>
  );
}

export default App;
