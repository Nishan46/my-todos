import {React , useEffect}  from 'react'
import './Verify.css'
import { useLocation } from 'react-router-dom'
import {useNavigate} from "react-router-dom";

function Verify() {

  let navigate = useNavigate();
  const {state} = useLocation()

  try
  {
    var {email , user_name} = state;
  }
  catch(ex){
    console.error('UnAuthorized request')
  }

  useEffect(()=>{
    if(state === null)
    {
      navigate('../authentication_error')
    }

  },[navigate,state])

  return (
    <div className='log-body'>
        <div className='header2'>
            <h1>Nishan Todos .</h1>
            <h2> Dear {user_name} ,</h2>
        </div>
        <div className='verrify-form'>
            <p>we sent an email to your account.</p>
            <p id='email_id'>{email}</p>
            <p>please check this up</p>
        </div>
        <a className='mails' href='https://gmail.com' target={'_parent'}><i class="fa fa-google" style={{padding:'0 5px', color: 'rgb(161, 161, 161)'}}></i>Gmail.com</a>
    </div>
  )
}

export default Verify