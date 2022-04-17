const express = require('express');
const rout = express.Router()
const User = require('../model/User.schema')



rout.get('/',async(req,res)=>{
    try{
        const user = await User.find().sort({"flat_number" :1})
        
        return res.status(200).send(user)
    }catch(e){
        return res.status(400).send(e.message)
    }
})



module.exports = rout