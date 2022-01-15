import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    width:100%;
    align-items:center;
    margin-top:2rem;

`;

const FormContanier = ({children}) => {
    return (
        <StyledForm onSubmit={(e)=>{e.preventDefault()}} >
            {children}
        </StyledForm>
    )
}

export default FormContanier