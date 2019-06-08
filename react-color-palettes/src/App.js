import React, {Component} from 'react';
import seedPalettes from './seedPalettes';
import Palette from './Components/Palette'; 
import PaletteList from './Components/PaletteList'; 
import MoreShades from './Components/MoreShades'; 
import {generateColors} from './colorHelper';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
	findPalette(id){
		return seedPalettes.find(palette => {
			return palette.id === id;
		});
	}
	render(){
		  return (
		  	<Switch>
			  	<Route exact path='/' render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps}/>}/>
			  	<Route exact path='/palette/:id' render={(routeProps) => <Palette palette={generateColors(this.findPalette(routeProps.match.params.id), 10)}/>}/>
			  	<Route exact path='/palette/:paletteId/:colorId' render={(routeProps) => 
			  		<MoreShades colorId={routeProps.match.params.colorId} palette={generateColors(this.findPalette(routeProps.match.params.paletteId), 10)}/>}
			  	/>
		  	</Switch>

		    // <div className="App">
		        //<Palette palette={generateColors(seedPalettes[1], 10)}/>
		    //</div>
		  )
	}
}

export default App;
