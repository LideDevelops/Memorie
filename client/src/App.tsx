import React from 'react';
import './App.css';
import './features/memorie-game/card/memorie-card'
import MemorieCard from './features/memorie-game/card/memorie-card';
function App() {
  return (
    <div className="App" data-testid="app-main-div">
      <MemorieCard id="1" text='TestCard'></MemorieCard>
    </div>
  );
}

export default App;
