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

const Form = ({addCollection}) => {
	const onSubmit = (formData, dispatch) => {
		addCollection(toCamelCase(formData.user),toPhoneNumber(formData.numbers))
		dispatch(reset("user"));
	}
	return (
        <FormStyled>
			<UserFormRedux onSubmit={onSubmit}/>
		</FormStyled>
	)
};


export default Form;