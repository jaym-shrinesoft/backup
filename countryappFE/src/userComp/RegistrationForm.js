import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RegistrationForm() {
    let navigate = useNavigate()
    const [username, setusername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setConfirmPassword] = useState("")
    const [error, setError] = useState(null)
    const [users, setUsers] = useState([])
    const isExists = (email, username) => {
        let hasUser = false
        Object.values(users).forEach((user) => {
            if (user.email === email || user.username === username) {
                hasUser = true
            }
        });
        return hasUser
    }
    const getUsers = async (e) => {
        const response = await fetch("http://localhost:8080/users/getAll");
        const data = await response.json();
        setUsers(data)
    }
    const registerUser = (e) => {
        e.preventDefault();
        if (password !== confirmpassword) {
            setError("Password and Confirm Password should match")
            setTimeout(() => {
                setError(null)
            }, 5000);
        }
        else if (isExists(email, username)) {
            setError("This email or username is already exists")
            setTimeout(() => {
                setError(null)
            }, 5000);
        }
        else {
            const userObj = { username: username, email: email, password: password }
            axios.post("http://localhost:8080/users/register", userObj)
                .then((response) => {
                    setError("Registration Successfull Redirecting to Login Page")
                    setTimeout(() => {
                        setError(null)
                        navigate("/login");
                    }, 2000);
                }).catch(e => {
                    setError("Something went wrong.");
                    setTimeout(() => {
                        setError(null)
                    }, 5000);
                });
        }
    }
    useEffect(() => {
        getUsers()
        //eslint-disable-next-line
    }, [])

    return (
        <div className='container text-center'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <form className='card my-4 p-4 shadow-sm rounded' onSubmit={registerUser}>
                        <h2>Registration Form</h2><br />
                        <input className='form-control' type="text" placeholder='Enter your Username' value={username} onChange={(e) => setusername(e.target.value)} required /> <br />
                        <input className='form-control' type="email" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} required /> <br />
                        <input className='form-control' type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} required /> <br />
                        <input className='form-control' type="password" placeholder='Retype your Password' value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} required /><br />
                        <Link to="/">Alreday a User? Login</Link> <br />
                        <input className='btn btn-primary' type="submit" value="Sign Up" />
                    </form>
                </div>
                <div style={{ color: 'red' }}>
                    {error}
                </div>
            </div>
        </div>
    )
}