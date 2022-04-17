const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    image:{ type:String,required:true },
    flat_number:{ type:String,required:true },
    bildingNumber:{ type:String,required:true },
    blockNumber:{ type:String,required:true },
    city:{ type:String,required:true },
    name:{ type:String,required:true },
    gender:{ type:String,required:true },
    age:{ type:String,required:true },
    typeOfOwner:{ type:String,required:true },
    numberOfPeople:{ type:String,required:true }

},{
    versionKey: false,
    timestamps: true,
})

module.exports = mongoose.model('UserData',userSchema)





// {
//     image: "",
//     flat_number: "",
//     bildingNumber: "",
//     blockNumber: "",  
//     city: "",
//     name: "",
//     gender: "",
//     age: "",
//     typeOfOwner: "",
//     numberOfPeople: "",
//   }