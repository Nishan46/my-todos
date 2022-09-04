import React from 'react'
import '../Components/Logging_Body.css'

function Verrify() {
  return (
    <div className='log-body'>
        <div className='header'>
            <h1>Nishan Todos .</h1>
        </div>
        <div className='verrify-form'>
            <p>we sent an email to your account.</p>
            <p>please check !</p>
        </div>
        <a className='mails' href='https://gmail.com' target={'_parent'}><p>Gmail.com</p></a>
        <a className='mails' href='https://outlook.com' target={'_parent'}><p>Outlook.com</p></a>
    </div>
  )
}

export default Verrify