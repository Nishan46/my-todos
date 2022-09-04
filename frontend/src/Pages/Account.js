import {React} from 'react'
import { useLocation } from 'react-router-dom'

function Account() {
  const {state} = useLocation();

  try
  {
    var {ac_token} = state
  }
  catch(er)
  {
    console.error("Unauthorized Login ....")

  }

  return (
    <div>
      <h1>{ac_token}</h1>
    </div>
  )
}
export default Account