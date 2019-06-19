import React, {createContext, Component} from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component{
	constructor(props){
		super(props);
		this.state = {language: "hindi"}
		this.updateLanguage = this.updateLanguage.bind(this);
	}
	updateLanguage(e){
		this.setState({language: e.target.value});
	}
	render(){
		return(
			<LanguageContext.Provider value={{...this.state, changeLang: this.updateLanguage}}>
				{this.props.children}
			</LanguageContext.Provider>
		)
	}
}

// Custom Higher Order Component
export const withLanguageContext = Component => props => (
	<LanguageContext.Consumer>
	{value => <Component languageContext={value} {...props}/>}
	</LanguageContext.Consumer>
);