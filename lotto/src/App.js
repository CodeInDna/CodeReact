import React from 'react';
import Lottery from './Lottery';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Lotto-Plus" numBalls={5} maxNum={20}/>
    </div>
  );
}

export default App;
