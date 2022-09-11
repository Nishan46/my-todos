import {React ,useState ,useEffect} from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import axios from 'axios';
import './Account.css'

function Account() {

  const {state} = useLocation();
  let navigate = useNavigate();

  const [Todo_Items , Set_Todo_Items] = useState([])

  try
  {
    var {email,user_name,token} = state
  }
  catch(er)
  {
    console.error("Unauthorized Login ....")
    if(state ===null)
    {
      navigate(`../authentication_error/`)
      
    }    

  }

  useEffect(()=>{
    if(email !== ""){
      console.log(email)
      const Get_Todos = async() =>{
        await axios.get(`http://localhost:5458/api/get-todo/${token}`).then(response =>{
          Set_Todo_Items(response.data)
        })
        
      }
      Get_Todos()
      console.log('im rednderd')
    }
  },[token,email])
  let classNames = '';
  let btn_done = '';
  let done_id = '';
  return (
    <div className='Account-body'>
      <div className='header_todo'>
        <h1>Welcome {user_name}</h1>
        <p><a href='/'><i style={{padding:'0 5px'}} class="fa fa-sign-out" aria-hidden="true"></i>Logout</a></p>
      </div>
      <div className='adder-body'>
        <div className='adder'>
          <label for='todo-text'>Add Todo :</label>
          <input id='todo-text'/>
        </div>
      </div>
      <div className='todo-container'>
        {Todo_Items.map(item =>
          <div className='todos'>
            <div style={{display:'none'}}>
              {item.done ?(classNames = 'done-todo-s', btn_done = 'btn-done-already',done_id ='id_done'):(classNames = 'todo-s',btn_done = 'btn-done',done_id='id')}
            </div>
            <p id={done_id}>{item.id} . </p>
            <p className={classNames}>{item.todo} .</p>
            <button id={btn_done}><i class="fa fa-check" aria-hidden="true"></i></button>
            <button id='btn-delete'><i class="fa fa-trash" aria-hidden="true"></i></button>
            <button id='btn-edit'><i class="fa fa-pencil" aria-hidden="true"></i></button>
        </div>
        )}
      </div>
    </div>
  )
}
export default Account