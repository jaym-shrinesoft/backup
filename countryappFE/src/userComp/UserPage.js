import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import RBSTable from '../components/RBSTable';

export default function UserPage() {
    const navigate = useNavigate();
    const localUser = JSON.parse(localStorage.getItem('userData'))
    // console.log(localUser);
    const verifyUser = () => {
        if (!localUser) {
            navigate("/login")
        }
    }

    const logout = () => {
        localStorage.removeItem('userData');
        navigate("/login")
    }
    useEffect(() => {
        verifyUser()
    }, [])

    return (
        <div className='container-fluid'>
            <div className='p-3 d-flex justify-content-between'>
                <h2>User Page</h2>
                {localUser && <div>Welcome <span className='fw-bold'>{localUser.username}</span></div>}
            </div>
            <div className='my-2 text-center'>
                <button className='btn btn-sm btn-secondary' onClick={logout}>Logout</button>
            </div>
            <br />
            <RBSTable />
            <br />
        </div>
    )
}