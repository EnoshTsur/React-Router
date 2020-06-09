import React from 'react'

export default function Contacts() {

    const friends = ['avi', 'liat', 'ester', 'hanoch']

    return (
        <div style={{
            margin: '1rem 0',
            textAlign: 'center'
        }}>
            <h1> Contacts: </h1>

            {
                friends.map((name, index, arr) => {
                    console.log(index, arr)

                    return  ( <div key={`${name}${index}`} style={{
                                    margin: '1rem auto',
                                    padding: '1rem',
                                    backgroundColor: '#d9d9d9',
                                    borderRadius: '7px',
                                    boxShadow: '0 2px 3px grey',
                                    maxWidth: '70%'
                                }}>
                                <h3>{`Name: ${name}`}</h3>
                                <h3>{`ID: ${index}`}</h3>
                            </div> )
                })
            }

        </div>
    )
}
