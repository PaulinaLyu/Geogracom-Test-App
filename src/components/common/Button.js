import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
    width: 80px;
    height: 30px;
    padding: 1px;
    text-align: center;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 0.6px;
    color: #fff;
    border-radius: 5px;
    background-color: #337AB7;

    :hover {
        color: #fff;
        background-color: #275D8B;
    }
`;

const Button = () => (
    <ButtonStyled>Сохранить</ButtonStyled>
)

export default Button;