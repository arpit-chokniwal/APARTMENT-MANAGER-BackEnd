const express = require('express');
const rout = express.Router()
const User = require('../model/User.schema')

rout.get('/:id',async(req,res)=>{
    try{
        const user = await User.find({ bildingNumber: { $in: `${req.params.id}` } })
        return res.status(200).send(user)
        
    }catch(e){
        return res.status(400).send(e.message)
    }
})



module.exports = rout