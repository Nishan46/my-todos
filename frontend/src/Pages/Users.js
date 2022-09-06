import {React ,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './Users.css'
import axios from 'axios'
import {useNavigate} from'react-router-dom'

function Users() {
    let {email ,token} = useParams()
    let navigates = useNavigate();
   
    const api = axios.create({
        baseURL: 'http://localhost:5458/api/'
    })

    useEffect(()=> {
        async function Use() {
            let res = await api.get(`verify/${token}`)
            setTimeout(()=>{
                if(res.data.code === '200'){
                    navigates(`../account/${res.data.data.user_name}`,{state:{email:res.data.data.email ,user_name:res.data.data.user_name,token:res.data.data.token}})
                    console.log(res.data.code)
                }
                else
                {
                    navigates(`../authentication_error/`)
                }
            },5000)
        }
        Use()
    },[token,api,navigates])

    return (
        <div className='us-body'>
            <div className='us_header'>
                <h1>Nishan Todos .</h1>
            </div>
            <div className='us-form'>
                <h2>{email}</h2>
                <h1>Verifying about you</h1> 
            </div>
        </div>
      )
}

export default Users