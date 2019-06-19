import React from 'react';
import {ThemeProvider} from './Contexts/ThemeContext';
import {LanguageProvider} from './Contexts/LanguageContext';
import NavBar from './NavBar';
import Form from './Form';
import PageContent from './PageContent';

function App() {
  return (
  	<ThemeProvider>
	    <LanguageProvider>
		    <PageContent>
				    <NavBar />
				    <Form />
		    </PageContent>
		</LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
