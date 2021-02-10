import React from 'react';
import styled from 'styled-components';

const FormControlStyled = styled.div`
    margin-bottom: 15px;
`;

const FormControlLabel = styled.label`
    font-weight: bold;
    font-size: 10px;
`;

const FormControlInput = styled.input`
    width: 200px;
    padding: 7px;
    margin-top: 5px;
    border: 2px solid #E7E7E7;
    border-radius: 5px;
    font-size: 13px;
    font-weight: normal;
`;

const FormControl = ({ type, name, label, placeholder, onChange, value }) => (
    
    <FormControlStyled>
        <FormControlLabel>
            {label}
            <FormControlInput onChange={onChange} type={type} name={name} placeholder={placeholder} value={value} /> 
        </FormControlLabel>
        </FormControlStyled>
)

export default FormControl;