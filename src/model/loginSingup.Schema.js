const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({

    name:{ type:String },
    email:{ type:String,required:true, unique: true },
    password:{ type:String,required:true }

},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model('UserLogin',loginSchema)