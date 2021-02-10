import React, { useContext } from 'react';
import { Context } from '../Context/Context';
import styled from 'styled-components';
import Button from '../common/Button';
import FormControl from '../common/FormControl';
import toCamelCase from '../../utils/toCamelCase';
import toPhoneNumber from '../../utils/toPhoneNumber';

const FormStyled = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

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

	return (
        <FormStyled>
			<FormWrapper>
				<FormControl onChange={onChangeName} type='text' name='user' label='ФИО' placeholder='Введите имя' value={user}/>
				<FormControl onChange={onChangeTel} type='tel' name='tnumbers' label='Телефон' placeholder='Введите телефон' value={numbers}/>
				<Button onClickFunction={addCollection}/>
			</FormWrapper>
		</FormStyled>
	)
};