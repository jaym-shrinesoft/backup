import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import UserPage from './UserPage'

export default function LoginForm() {
    let navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const localUser = JSON.parse(localStorage.getItem('userData'))
    const checkLogin = () => {
        const userObj = { email: email, password: password }
        axios.post("http://localhost:8080/users/login", userObj)
            .then((response) => {
                if (response.data.length !== 0) {
                    localStorage.setItem('userData', JSON.stringify(response.data[0]));
                    navigate("/")
                }
                else {
                    setError("Invalid emailId of Password")
                    setTimeout(() => {
                        setError(null)
                    }, 5000);
                }
            }).catch(err => {
                setError("Something went wrong")
                setInterval(() => {
                    setError(null)
                }, 5000);
            });
    }
    const loginUser = (e) => {
        e.preventDefault();
        checkLogin()
    }
    useEffect(() => {
       if(localUser){
        navigate("/")
       }
    }, [])
    return (
        <div>
            <div className='container text-center'>
                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className='form-style'>
                            <form className='card my-4 p-4 shadow-sm rounded' onSubmit={loginUser}>
                                <h2>Login Form</h2><br />
                                <input className="form-control" type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
                                <input className="form-control" type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
                                <Link to="/register">New User? Register</Link> <br />
                                <input type="submit" className='btn btn-primary' value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
                <div style={{ color: 'red' }}>
                    {error}
                </div>
            </div>
        </div>
    )
}