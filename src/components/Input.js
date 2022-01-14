import React,{useContext} from 'react'
import { usersContext } from '../contexts/usersContext'

const Input = ({name,type}) => {
    const {user,handleChange} = useContext(usersContext)
    return (
        <>
        <label htmlFor={name}>{name}</label>
        <input
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