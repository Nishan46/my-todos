import React from 'react'
import './Logging_Body.css'
import axios from 'axios'
import { useState} from 'react'
import {useNavigate} from "react-router-dom";


const Logging_Body = () => {
    let navigate = useNavigate();


    const [UserName , setUserName] = useState('')

    const api = axios.create({
        baseURL: '/api/'
    })


    function OnvalueChanged(event){
        setUserName(event.target.value)
    }


    const Login = async ()=>{
        let res = await api.post(`login/${UserName}/`)
        navigate(`verrify/${UserName}`)
        if(res.data.code === '305'){
            alert("You are not one of our customer :/")
        }

    };




  return (
    <div className='log-body'>
        <div className='header'>
            <h1>Nishan Todos .</h1>
        </div>
        <div className='login-form'>
            <label for='user'>Email or Username :</label>
            <input type={'text'} id='user' placeholder='nishantodoapp@gmail.com' onChange={OnvalueChanged}/> 
        </div>
        <button className='btn-login' onClick={()=>Login()}>LogIn</button>

        <div className='signup'>
            <p><a href='https://google.com' target={'__blank'}>Create Account .</a></p>
        </div>
        <div className='forgot'>
            <p><a href='https://google.com' target={'__blank'}>Forgot Password ?</a></p>
        </div>
    </div>
  )
}

export default Logging_Body