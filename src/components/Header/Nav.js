import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5%;
    margin-right: 30px;

    :hover {
        color: #000;
    }
`;

const Nav = () => (
    <>
        <NavLink exact to='/'>
            <NavItem>Главная</NavItem>
        </NavLink>
        <NavLink exact to='form'>
            <NavItem>Форма</NavItem>
        </NavLink>
        <NavLink exact to='collection'>
            <NavItem>Коллекция</NavItem>
        </NavLink>
    </>
);

export default Nav;