import React from 'react'
import './auth.css'

function AuthError() {
  return (
    <div>
        <div className='auth'>
            <p>authentication error please log again</p>
            <a href='/'>Home</a>
        </div>
        <div className='big'>
            <h1>Authentication Error</h1>
        </div>
    </div>
  )
}

export default AuthError

