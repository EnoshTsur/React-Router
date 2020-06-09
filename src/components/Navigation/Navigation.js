import React from 'react'
import Button from '../Button/Button'
import { Router, Link, } from 'react-router-dom'

export default function Navigation({ history, }) {

    const homepage = "/homepage"
    const about = "/about"
    const contacts ="/contacts"

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#e8e8e8',
            flexWrap: 'wrap'
        }}>
            <Router history={history}>
                <Link to={homepage}>
                    <Button
                        title="Homepage"
                    />
                </Link>
            </Router>

            <Router history={history}>
                <Link to={about}>
                    <Button
                        title="About"
                    />
                </Link>
            </Router>

        

            <Router history={history}>
                <Link to={contacts} >
                    <Button
                        title="Contacts"
                    />
                </Link>
            </Router>
        </nav>
    )
}