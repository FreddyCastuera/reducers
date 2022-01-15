import React,{useContext} from 'react'
import { usersContext } from '../contexts/usersContext'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding:0.7rem 1.2rem;
    background-color:crimson;
    border-radius:2rem;
    border:none;
    opacity:0.7;
    margin:0.5rem;
    :hover{
        opacity:1;
        border:2px solid coral;
    }
`;

const ButtonDeleteAll = () => {
    const {dispatch} = useContext(usersContext)
    return (
        <StyledButton  onClick={()=>dispatch({type:'deleteAll'})}> 
            elimnar usuarios
        </StyledButton>
    )
}

export default ButtonDeleteAll