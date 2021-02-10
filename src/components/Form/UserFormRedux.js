import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import Button from '../common/Button';

const FormWrapper = styled.form`
	margin: 0;
	position: absolute;
	top: 40%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%)
`;

const FormControlStyled = styled.div`
    margin-bottom: 15px;
`;

const FormControlLabel = styled.label`
    font-weight: bold;
    font-size: 10px;
`;

const UserForm = (props) => {
	return (
		<FormWrapper onSubmit={props.handleSubmit}>
			    <FormControlStyled>
        			<FormControlLabel>
            			ФИО
						<Field placeholder={'Введите имя'} type={'text'} name={'user'} component={"input"} />
        			</FormControlLabel>
        		</FormControlStyled>
				<FormControlStyled>
					<FormControlLabel>
						Телефон
						<Field placeholder={'Введите телефон'} type={'tel'} name={'numbers'} component={"input"} /> 
					</FormControlLabel>
				</FormControlStyled>
			<Button />
		</FormWrapper>
	)
};

const UserFormRedux= reduxForm({form: 'user'})(UserForm);

export default UserFormRedux;
