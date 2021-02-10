import React from 'react';
import styled from 'styled-components';

const NotFoundStyled = styled.div`
	width: 100%;
	height: 100vh;
	position: relative;
`;

const NotFoundTitle = styled.h1`
    margin: 0;
    position: absolute;
    top: 40%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
`;

const NotFound = () => (
    <NotFoundStyled>
		<NotFoundTitle>404</NotFoundTitle>
	</NotFoundStyled>
);

export default NotFound;