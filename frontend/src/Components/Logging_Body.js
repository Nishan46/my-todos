import React from 'react'
import './Logging_Body.css'
import axios from 'axios'
import { useState ,useEffect} from 'react'
import {useNavigate} from "react-router-dom";




const Logging_Body = () => {
    const baseURL = `${window.location.origin.toString()}`
    let navigate = useNavigate();
    const [Pressed ,setPressed] = useState(false)
    const [PostName , setPostName] = useState('')

    const api = axios.create({
        baseURL: 'http://localhost:5458/api/'
    })

    document.addEventListener("keydown",function(event){
        if(event.code === "Enter")
        {
            setPressed(true);
        }
    })
    function OnvalueChanged(event){
        setPostName(event.target.value)
    }
    // eslint-disable-next-line
    const Login = async ()=>{
        const postData = {
            "uri":baseURL
        }        
        let res = await api.get(`login/${PostName}`,postData)
        console.log(res.data)
        if(res.data.code === '305'){
            alert("username or email is incorrect")
        }
        else if(res.data.code ==='200')
        {
            navigate(`verrify/${res.data.email}`,{state:{email:res.data.email ,user_name:res.data.user_name}})
        }

    };
    useEffect(()=>{
        if(Pressed === true)
        {
            Login()
            setPressed(false)
        }
    },[Pressed,Login])

  return (
    <div className='log-body'>
        <div className='header'>
            <h1>Nishan Todos .</h1>
        </div>
        <div className='login-form'>
            <label for='user'>Email or Username :</label>
            <input type={'text'} id='user' placeholder='nishantodoapp@gmail.com' onChange={OnvalueChanged}/> 
        </div>
        <button type='submit' className='btn-login' onClick={Login}>LogIn</button>

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