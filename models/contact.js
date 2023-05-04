const mongoose=require('mongoose')

// define schema
const ContactSchema=new mongoose.Schema({
    name:{
        type:String ,
        reqiured:true
    },
    email:{
        type:String ,
        reqiured:true
    },
    phone:{
        type:String ,
        reqiured:true
    },
    message:{
        type:String ,
        reqiured:true
    },
   
},{
    timestamps:true
})
// create collection

const ContactModel=mongoose.model('contact',ContactSchema)
module.exports=ContactModel