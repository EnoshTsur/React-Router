import React from 'react'
import classes from './Button.module.css'

function Button({ title, onClick, disabled=false, type,  }) {

    const { Btn, BtnSuccess, BtnDefault,} = classes;

    const success = 'success'

    const className = type === success ? 
    `${Btn} ${BtnSuccess}`: `${Btn} ${BtnDefault}`
    
    return (
        <button 
            onClick={onClick} 
            disabled={disabled}  
            className={className}  
        >
            {title}
        </button>
    )
}

export default Button