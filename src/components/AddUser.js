import React,{useContext} from 'react'
import { usersContext } from '../contexts/usersContext'
const AddUser = () => {
    const {user,dispatch} = useContext(usersContext)
    return (
        <button onClick={()=>dispatch({type:'addUser',user:user})} >agregar usuario</button>
    )
}

export default AddUser