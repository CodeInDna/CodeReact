import React from 'react';
import seedPalettes from './seedPalettes';
import Palette from './Components/Palette';

function App() {
  return (
    <div className="App">
        <Palette {...seedPalettes[1]}/>
    </div>
  );
}

export default App;
