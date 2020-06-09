import React from 'react'
import Button from '../Button/Button'

export default function Navigation() {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#e8e8e8',
            flexWrap: 'wrap'
        }}>
            <Button
                title="Homepage"
            />
            <Button
                title="About"
            />
            <Button
                title="Contacts"
            />
        </nav>
    )
}
