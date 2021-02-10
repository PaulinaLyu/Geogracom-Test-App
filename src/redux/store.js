import { createStore, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import collectionReducer from './collectionReducer';

let reducers = combineReducers ({
	collectionState: collectionReducer,
	form: formReducer
});

let store = createStore(reducers);
window.store = store;
export default store;