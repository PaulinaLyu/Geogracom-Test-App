import React from 'react';
import { connect } from 'react-redux';
import { addCollection } from '../../redux/collectionReducer';
import Form from './Form';

class FormContainer extends React.Component {
	render() {
		return <Form {...this.props}/>
	}
}

export default connect(null, {addCollection}) (FormContainer);