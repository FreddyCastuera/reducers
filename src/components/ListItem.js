import React,{useContext} from 'react'
import { usersContext } from '../contexts/usersContext'
import styled from 'styled-components'

const StyledButton = styled.button`
    padding:0.7rem 1.2rem;
    background-color:indianRed;
    border-radius:2rem;
    border:none;
    opacity:0.7;
    
    :hover{
        opacity:1;
        border:2px solid coral;
    }
`;
const StyledLi = styled.li`
    display:flex;
    fled-direction:row;
    width:100;
    justify-content:space-around;
    align-items:center;
`;
const StyledP = styled.p`
    display:flex;
    fled-direction:row;
    width:75%;
    justify-content:space-around;
    align-items:center;
`;


const ListItem = ({id,name,lastName,telefono}) => {
    const {dispatch} = useContext(usersContext)
    return (
        <StyledLi key={id} id={id}>
              <StyledP>
                <span>{name}</span>
                <span>{lastName}</span>
                <span>{telefono}</span>
                <StyledButton id={id} onClick={()=>dispatch({type:'deleteUser',id:id})}>eliminar</StyledButton>    
            </StyledP>
        </StyledLi>
    )
}

export default ListItem