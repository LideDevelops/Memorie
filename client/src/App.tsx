import React from 'react';
import './App.css';
import './features/memorie-game/card/memorie-card'
import MemorieCard from './features/memorie-game/card/memorie-card';
import MemorieField from './features/memorie-game/field/memorie-field';
function App() {
  
  return (
    <div className="App" data-testid="app-main-div">
        <MemorieField id='test'></MemorieField>
    </div>
  );
}

export default App;
