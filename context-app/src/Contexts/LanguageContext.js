import React, {createContext, useState} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props){
	const [language, setLanguage] = useState("hindi");
	const updateLanguage = (e) => setLanguage(e.target.value);
	return(
			<LanguageContext.Provider value={{language, updateLanguage}}>
				{props.children}
			</LanguageContext.Provider>
	)
}

// Custom Higher Order Component
/*export const withLanguageContext = Component => props => (
	<LanguageContext.Consumer>
	{value => <Component languageContext={value} {...props}/>}
	</LanguageContext.Consumer>
);*/