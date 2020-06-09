import React from 'react'

export default function About() {

    // name, setName -> input
    // greeting, setGreeting -> h1

    // input.onChange -> setName(...)
    // useEffect ? name -> if contains 'avi' ? setGreeting 'hahah' : 'bababa'
    // h1 { greeting } 
    
    const hahaha = "hahaha"
    const bababa = "bababa"
    const avi = "avi"

    const [ name, setName, ] = React.useState('')
    const [ greeting, setGreeting, ] = React.useState(hahaha)

    React.useEffect(() => {
        setGreeting(name.includes(avi) ? hahaha : bababa)
    }, [name])

    return (
        <div>
            <input onChange={e => setName(e.target.value)}  placeholder="Name" />
            <h1>{greeting}</h1>
        </div>
    )
}
