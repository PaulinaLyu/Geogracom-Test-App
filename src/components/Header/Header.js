import React from 'react';
import styled from 'styled-components';
import { Container, Row } from 'react-bootstrap';
import Nav from './Nav';

const HeaderStyled = styled.header`
    width: 100%;
    height: 55px;
    background-color: #F8F8F8;

`;

const Header = () => (
	<HeaderStyled>
        <Container className="h-100">
			<Row className="h-100">
                <Nav />
            </Row>
        </Container>
	</HeaderStyled>
)
export default Header;