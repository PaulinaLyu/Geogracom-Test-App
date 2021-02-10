import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

const MainTitle = styled.h1`
	margin: 0;
	position: absolute;
	top: 40%;
	left: 50%;
	margin-right: -50%;
	transform: translate(-50%, -50%)
`;

const Main = () => (
    <MainStyled>
		<MainTitle>Добро пожаловать!</MainTitle>
	</MainStyled>
);

export default Main;