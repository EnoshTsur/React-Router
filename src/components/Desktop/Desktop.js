import React from 'react'
import DesktopSrc from '../../assets/desktop.png'

export default function Desktop() {

    return (

        <div 
            style={{
                margin: '1rem 0',
                textAlign: 'center'
            }}
        >
            <img 
                style={{
                    maxWidth: '20rem'
                }} 
                src={DesktopSrc}  
                alt="mobile" 
            />
        </div>
    )
}
