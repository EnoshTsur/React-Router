import React from 'react'
import MobileSrc from '../../assets/mobile.png'

export default function Mobile() {
    return (
        <div 
            style={{
                margin: '1rem 0',
                textAlign: 'center'
            }}
    >
        <img 
            style={{
                maxWidth: '10rem'
            }} 
            src={MobileSrc}  
            alt="mobile" 
        />
    </div>
    )
}
