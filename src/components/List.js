import React,{useContext} from 'react'
import ListItem from './ListItem'
import { usersContext } from '../contexts/usersContext'

const List = () => {
    const {state,dispatch} = useContext(usersContext)
    return (
        <ul style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "50%"
          }}>
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
        </ul>
    )
}

export default List