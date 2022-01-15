import React,{useContext} from 'react'
import { usersContext } from '../contexts/usersContext'
import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    width:70%;
    color: palevioletred;
    background: papayawhip;
    border: none`;

const StyledLabel = styled.label`
    padding: 0.5rem;
    margin: 0.5rem
`;



const Input = ({name,type}) => {
    const {user,handleChange} = useContext(usersContext)
    return (
        <>
        <label htmlFor={name}>{name}</label>
        <StyledInput
          id={name}
          type={type}
          name={name}
          value={user[name]}
          onChange={handleChange}
        />  
        </>
    )
}

export default Input