const express = require('express');
const authCheck = require('../middleware/authCheck.middle');
const rout = express.Router()
const User = require('../model/loginSingup.Schema')

rout.post('/',authCheck,async(req,res)=>{
    try{
        const user = await User.create(req.body)
        return res.status(200).send(user)
    }catch(e){
        return res.status(400).send(e.message)
    }
})

rout.get('/',async(req,res)=>{
    try{
        const user = await User.find().lean().exec()
        return res.status(200).send(user)
    }catch(e){
        return res.status(400).send(e.message)
    }
})

rout.patch('/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
        return res.status(200).send(user)
    }catch(e){
        return res.status(400).send(e.message)
    }
})

rout.delete('/:id',async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        return res.status(200).send(user)
    }catch(e){
        return res.status(400).send(e.message)
    }
})

module.exports = rout