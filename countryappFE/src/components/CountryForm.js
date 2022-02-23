import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


export default function CountryForm() {
    let navigate = useNavigate();
    const API = process.env.REACT_APP_BASE_URL;
    const [countryName, setcountryName] = useState("");
    const [countryCode, setcountryCode] = useState("");
    const [countryId, setcountryId] = useState("")
    const [error, seterror] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (countryName === "" || countryCode === "") {
            seterror("Field should not be lempty");
            setTimeout(() => {
                seterror(null);
            }, 3000);

        }
        else {
            // const requestType = {
            //     method: "POST",
            //     headers: { "Content-type": "application/json" },
            //     body: JSON.stringify({ name: countryName, countryId: countryCode })
            // }
            // fetch(`${API}/add`, requestType);
            axios
                .post(`${API}/add`, {
                    name: countryName,
                    countryId: countryCode
                })
                .then((response) => {
                    navigate("/");
                });
        }
    }
    return (
        <div className='container text-center'>
            <div className='row justify-content-center'>
                <div className='col-6'>
                    <form className='card my-4 p-4 shadow-sm rounded' onSubmit={handleSubmit}>
                        <h2>Add Country</h2>
                        <input className='form-control' type="text" placeholder='Enter Country Name' value={countryName} onChange={(e) => { setcountryName(e.target.value) }}></input>
                        <br />
                        <input className='form-control' type="text" placeholder='Enter Country Code' value={countryCode} onChange={(e) => { setcountryCode(e.target.value.toUpperCase()) }}></input>
                        <br />
                        {/* <input type="text" placeholder='Enter Country Id' value={countryId} onChange={(e)=>{setcountryId(e.target.value)}}/> */}
                        <br />
                        <input className='btn btn-primary' type="submit" value="Add"></input>
                    </form>
                </div>
            </div>

            {
                error && <div style={{ color: "red" }}>
                    {error}
                </div>
            }
        </div>
    )
}