import React from 'react';
import './features/memorie-game/card/memorie-card'
import MemorieCard from './features/memorie-game/card/memorie-card';
import MemorieField from './features/memorie-game/field/memorie-field';
import UserInterface from './features/memorie-game/user-interface/user-interface';
function App() {
  return (
    <div className="App" data-testid="app-main-div">
        <UserInterface id='user-interface'></UserInterface>
    </div>
  );
}

export default App;
