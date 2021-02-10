import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/style/GlobalStyle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import CollectionContainer from './components/Collection/CollectionContainer';
import FormContainer from './components/Form/FormContainer';
import NotFound from './components/NotFound';

const App = () => (
  	<>	
	  	<GlobalStyle />
    	<Header />
		<Container>
			<Row>
				<Switch>
					<Route exact path='/' 
						render={ () => <Main /> } />

					<Route path='/collection' 
						render={ () => <CollectionContainer /> } />

					<Route path='/form' 
						render={ () => <FormContainer /> } />
				
					<Route  
						render={ () => <NotFound /> } />
				</Switch>
			</Row>
		</Container>
  	</>
);

export default App;
