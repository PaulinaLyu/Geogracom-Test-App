import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/style/GlobalStyle';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Collection from './components/Collection/Collection';
import {Form} from './components/Form/Form';
import NotFound from './components/NotFound';
import { useUser } from './components/Hooks/useUser';
import { useNumbers } from './components/Hooks/useNumbers';
import { useCollection } from './components/Hooks/useCollection';
import { Context } from './components/Context/Context';

const App = () => {

	const user = useUser();
	const numbers = useNumbers();
	const collection = useCollection();

  return (
  	<Context.Provider value={{
			user,
		  	numbers,
		  	collection
	  	}}>	
	  	<GlobalStyle />
    	<Header />
		<Container>
		<Row>
			<Switch>
				<Route exact path='/' 
					render={ () => <Main /> } />

				<Route path='/collection' 
					render={ () => <Collection /> } />

				<Route path='/form' 
					render={ () => <Form /> } />
			
				<Route  
					render={ () => <NotFound /> } />
			</Switch>
		</Row>
		</Container>
  	</Context.Provider>
  );
}

export default App;
