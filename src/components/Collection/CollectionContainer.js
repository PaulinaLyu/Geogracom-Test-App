import React from 'react';
import { connect } from 'react-redux';
import { deleteCollectionItem } from '../../redux/collectionReducer';
import Collection from './Collection';

class CollectionContainer extends React.Component {
	render() {
		return <Collection collection={this.props.collection} 
            deleteCollectionItem={this.props.deleteCollectionItem}/>
	}
}

let mapStateToProps = (state) => {
	return {
		collection: state.collectionState.collection,
	}
}

export default connect(mapStateToProps, {deleteCollectionItem}) (CollectionContainer);