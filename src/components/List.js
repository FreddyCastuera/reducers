import React,{useContext} from 'react'
import ListItem from './ListItem'
import { usersContext } from '../contexts/usersContext'
import styled from 'styled-components'
const StyledUl = styled.ul`
  width:100%
`;

const List = () => {
    const {state,dispatch} = useContext(usersContext)
    return (
        <StyledUl>
        {!!state.length && 
          state.map(({ id, name, lastName,telefono }) => (
            <ListItem
                id={id}
                name={name}
                lastName={lastName}
                telefono={telefono}
                dispatch={dispatch}
             />
          ))}
        </StyledUl>
    )
}

export default List