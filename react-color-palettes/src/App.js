import React, {Component} from 'react';
import seedPalettes from './seedPalettes';
import Palette from './Components/Palette'; 
import PaletteList from './Components/PaletteList'; 
import MoreShades from './Components/MoreShades'; 
import CreatePalette from './Components/CreatePalette'; 
import {generateColors} from './colorHelper';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			palettes: seedPalettes
		}
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
	}

	findPalette(id){
		return this.state.palettes.find(palette => {
			return palette.id === id;
		});
	};

	savePalette(newPalette){
		this.setState({palettes: [...this.state.palettes, newPalette]});
	}
	render(){
		  return (
		  	<Switch>
			  	<Route exact path='/palette/create' render={(routeProps) => <CreatePalette palettes={this.state.palettes} savePalette={this.savePalette} {...routeProps}/>}/>
			  	<Route exact path='/' render={(routeProps) => <PaletteList palettes={this.state.palettes} {...routeProps}/>}/>
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
