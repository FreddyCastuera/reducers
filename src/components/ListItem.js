import React,{useContext} from 'react'
import { usersContext } from '../contexts/usersContext'

const ListItem = ({id,name,lastName,telefono}) => {
    const {dispatch} = useContext(usersContext)
    return (
        <li key={id} id={id} style={{display:'flex',flexDirection:'row'}}>
              <p>{`${name} ${lastName} ${telefono}`}</p>
              <button id={id} style={{padding:'5px 10px'}} onClick={()=>dispatch({type:'deleteUser',id:id})}>eliminar</button>
        </li>
    )
}

export default ListItem