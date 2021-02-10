import React from 'react';
import styled from 'styled-components';
import { reset } from "redux-form";
import UserFormRedux from './UserFormRedux';
import toCamelCase from '../../utils/toCamelCase';
import toPhoneNumber from '../../utils/toPhoneNumber';

const FormStyled = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

<<<<<<< HEAD
const FormWrapper = styled.form`
	margin: 0;
	position: absolute;
	top: 40%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%)
`;

export const Form = () => {
	const { user: { user, setUser },
			numbers: { numbers, setNumbers },
			collection: { collection, setCollection }
	} = useContext(Context);

	const addCollection = (event) => {
		event.preventDefault();
		const entires = [
			['id', Date.now()],
			['user', toCamelCase(user)],
			['numbers', toPhoneNumber(numbers)]
		]
		const collectionItem = new Map(entires)
		setCollection([
			...collection, 
			collectionItem
		])
		setUser('');
		setNumbers('');
	}

	const onChangeName = event => {
		setUser(event.target.value);
	}

	const onChangeTel = event => {
		setNumbers(event.target.value);
	}

=======
const Form = ({addCollection}) => {
	const onSubmit = (formData, dispatch) => {
		addCollection(toCamelCase(formData.user),toPhoneNumber(formData.numbers))
		dispatch(reset("user"));
	}
>>>>>>> part-2
	return (
        <FormStyled>
			<UserFormRedux onSubmit={onSubmit}/>
		</FormStyled>
	)
};


export default Form;