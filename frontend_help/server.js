const axios = require('axios')
const cors = require('cors')
const express = require('express')

require('dotenv').config()

const app = express()
const PORT = process.env.PORT
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.route('/api/:email').get(async (request,response)=>{
    const responseBy = await axios.post(`http://127.0.0.1:8000/api/login/${request.params.email}/${process.env.API_KEY}`)
    response.json(responseBy.data)
    console.log(responseBy.data)

});

app.route('/api/verify/:token').get(async (request,response)=>{
    const responseBy = await axios.get(`http://127.0.0.1:8000/api/verify/${request.params.token}/${process.env.API_KEY}`)
    response.json(responseBy.data)

});

app.route('/api/get-todo/:token').get(async (request,response)=>{
    const responseBy = await axios.get(`http://127.0.0.1:8000/api/get-todo/${request.params.token}/${process.env.API_KEY}`)
    response.json(responseBy.data)
    console.log(responseBy)
});


app.listen(PORT,()=>{console.log(`server is listening on PORT:${PORT}`)})



