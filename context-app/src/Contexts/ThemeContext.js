import React, {createContext, Component} from 'react';

export const ThemeContext = createContext();

export class ThemeProvider extends Component{
	constructor(props){
		super(props);
		this.state = {isDarkTheme: false}
		this.toggleTheme = this.toggleTheme.bind(this);
	}
	toggleTheme(){
		this.setState({isDarkTheme: !this.state.isDarkTheme});
	}
	render(){
		return(
			<ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
				{this.props.children}
			</ThemeContext.Provider>
		)
	}
}