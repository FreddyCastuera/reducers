import React,{useContext} from 'react'
import { usersContext } from '../contexts/usersContext'

const ButtonDeleteAll = () => {
    const {dispatch} = useContext(usersContext)
    return (
        <button 
            style={{margin:'10px auto',width:'25%',display:'block' }} 
            onClick={()=>dispatch({type:'deleteAll'})} >eliminar usuarios
        </button>
    )
}

export default ButtonDeleteAll