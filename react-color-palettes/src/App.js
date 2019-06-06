import React, {Component} from 'react';
import seedPalettes from './seedPalettes';
import Palette from './Components/Palette'; 
import {generateColors} from './colorHelper';

class App extends Component {
	render(){
		  return (
		    <div className="App">
		        <Palette palette={generateColors(seedPalettes[4], 10)}/>
		    </div>
		  )
	}
}

export default App;
