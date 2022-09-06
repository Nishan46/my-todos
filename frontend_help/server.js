const axios = require('axios')
const cors = require('cors')
const express = require('express')
const bodyParser = require("body-parser");
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
app.use(cors())
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.get('/api/:page/:token',async (request,response)=>{
    const responseBy = await axios.get(`http://127.0.0.1:8000/api/${request.params.page}/${request.params.token}/${process.env.API_KEY}`,request.body.uri)
    // response.json(responseBy)
    response.json(responseBy)

})


app.listen(PORT,()=>{console.log(`server is listening on PORT:${PORT}`)})



