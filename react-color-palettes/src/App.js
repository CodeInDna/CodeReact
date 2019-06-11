import React, {Component} from 'react';
import seedPalettes from './seedPalettes';
import Page from './Components/Page';
import Palette from './Components/Palette'; 
import PaletteList from './Components/PaletteList'; 
import MoreShades from './Components/MoreShades'; 
import CreatePalette from './Components/CreatePalette'; 
import {generateColors} from './colorHelper';
import {Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class App extends Component {
	constructor(props){
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
		this.state = {
			palettes: savedPalettes || seedPalettes
		}
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}

	findPalette(id){
		return this.state.palettes.find(palette => {
			return palette.id === id;
		});
	};

	savePalette(newPalette){
		this.setState({palettes: [...this.state.palettes, newPalette]}, this.syncLocalStorage);
	}

	syncLocalStorage(){
		window.localStorage.setItem("palettes",
			JSON.stringify(this.state.palettes)
		);
	}

	deletePalette(id){
		this.setState(currState => ({
			palettes: currState.palettes.filter(palette => palette.id !== id)
		}),
		this.syncLocalStorage
		)
	}
	render(){
		  return (
		  <Route render={({location}) => (
		  	<TransitionGroup>
		  	<CSSTransition key={location.key} classNames='page' timeout={500}>
		  	<Switch location={location}>
			  	<Route exact 
			  		path='/palette/create' 
			  		render={(routeProps) => 
			  			<Page>
			  			<CreatePalette 
			  				palettes={this.state.palettes} 
			  				savePalette={this.savePalette} 
			  				{...routeProps}
			  			/>
			  			</Page>
			  		}
			  	/>
			  	<Route exact 
			  		path='/' 
			  		render={(routeProps) => 
						<Page>
			  			<PaletteList 
			  			palettes={this.state.palettes} 
			  			deletePalette={this.deletePalette} 
			  			{...routeProps}
			  			/>
			  			</Page>
			  		}
			  	/>
			  	<Route exact 
			  		path='/palette/:id' 
			  		render={(routeProps) => 
			  			<Page>
			  			<Palette 
			  			palette={generateColors(this.findPalette(routeProps.match.params.id), 10)}
			  			/>
			  			</Page>
			  		}
			  	/>
			  	<Route exact 
			  		path='/palette/:paletteId/:colorId' 
			  		render={(routeProps) => 
			  			<Page>
			  			<MoreShades 
			  			colorId={routeProps.match.params.colorId} 
			  			palette={generateColors(this.findPalette(routeProps.match.params.paletteId), 10)}
			  			/>
			  			</Page>
			  		}
			  	/>
		  	</Switch>
		  	</CSSTransition>
		  	</TransitionGroup>
		  	)}>
		  </Route>

		    // <div className="App">
		        //<Palette palette={generateColors(seedPalettes[1], 10)}/>
		    //</div>
		  )
	}
}

export default App;
