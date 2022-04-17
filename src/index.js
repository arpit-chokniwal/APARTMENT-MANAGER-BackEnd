const express = require('express');

const app = express()
app.use(express.json())

const cors = require('cors')
app.use(cors())


const login = require('./controller/login.ctrl')
app.use('/login',login)


const register = require('./controller/singUp.ctrl')
app.use('/register',register)


const user = require('./controller/user.ctrl')
app.use('/user',user)

const data = require('./controller/input.ctrl')
app.use('/input',data)


const x = require('./controller/sort.ctrl')
app.use('/sort',x)












const connect =  require('./configs/db')

require("dotenv").config({ path: "../.env" });
const Port = process.env.PORT || 1234

app.listen(Port,async()=>{
    try{
        await connect()
        console.log(`Listing at Port ${Port}`);
    }catch(e){
        console.log(e)
    }
})