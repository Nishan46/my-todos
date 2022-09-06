import {React ,useState ,useEffect} from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import axios from 'axios';


function Account() {

  const {state} = useLocation();
  let navigate = useNavigate();

  const [Todo_Items , Set_Todo_Items] = useState([])
  const api = axios.create({
    baseURL: 'http://localhost:5458/api/'
  })

  try
  {
    var {email,user_name,token} = state
  }
  catch(er)
  {
    console.error("Unauthorized Login ....")    

  }

  useEffect(()=>{

    async function Get_Todos(){

      let res = await api.get(`get-todo/${token}`)
      Set_Todo_Items(res.data)
    }
    if(state ===null)
    {
      navigate(`../authentication_error/`)
    }
    else{
      Get_Todos();
    }


  },[state,api,navigate,token,Set_Todo_Items])

  return (
    <div>
      <h1>{token}</h1>
      <h1>{email}</h1>
      <h1>{user_name}</h1>
      {Todo_Items.map(item =><p>{item.todo}</p>)}
    </div>
  )
}
export default Account