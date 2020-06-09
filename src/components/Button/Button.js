import React from 'react'
import Radium from 'radium'

function Button({ title, onClick, disabled=false, type="default" }) {

    
    const success = 'success'

    const style  = {
        padding: '0.5rem 1rem',
        color: 'white',
        backgroundColor: type === success ? '#04AA51' :  '#d9d9d9',
        borderRadius: '7px',
        border: type === success ? '2px solid rgb(54, 209, 126)' : '2px solid #ccc',
        ':hover': {
            backgroundColor: type === success ? 'rgb(18, 122, 67)' : '#b3b3b3',
            cursor: 'pointer'
        },
        ':focus': {
            outline: 'none'
        },
        ':active': {
            backgroundColor: type === success ? 'rgb(21, 90, 53)' : '#979797'
        }
    }

    return (
        <button 
            onClick={onClick} 
            disabled={disabled}    
            style={style}
        >
            {title}
        </button>
    )
}

export default Radium(Button)