const ADD_COLLECTION = 'ADD_COLLECTION';
const DELETE_COLLECTION_ITEM = 'DELETE_COLLECTION_ITEM';

let initialState = {
    collection: []
};

const collectionReducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_COLLECTION:
            const entires = [
			    ['id', Date.now()],
			    ['user', action.user],
			    ['numbers', action.numbers]
		]
		    const collectionItem = new Map(entires)
			return { 
                ...state,
                collection: [...state.collection, collectionItem]
			}
		case DELETE_COLLECTION_ITEM:
			return { 
				...state,
				collection: [...state.collection].filter((item) => item.get('id') !== action.id)
			}
		default: 
			return state;
	}
}

export const addCollection = (user, numbers) => ({type: ADD_COLLECTION, user, numbers});
export const deleteCollectionItem = (id) => ({type: DELETE_COLLECTION_ITEM, id });

export default collectionReducer;