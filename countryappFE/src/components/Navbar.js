import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='d-flex px-3 justify-content-center bg-light'>
            <h1><Link style={{textDecoration:"none"}} to="/" className="text-dark">Country API</Link></h1>
        </div>
    )
}
