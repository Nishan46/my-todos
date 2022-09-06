import {React} from 'react'
import {useParams} from 'react-router-dom'
import './Users.css'
// import axios from 'axios'

function Users() {
    let {email } = useParams()

    // let api = axios.create({
    //     baseURL:'/'
    // });

    // useEffect(async()=> {
    //     let res = await api.post()
    // },[email,token])

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