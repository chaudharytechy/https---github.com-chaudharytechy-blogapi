const mongoose=require('mongoose')

// define schema
const AboutSchema=new mongoose.Schema({
    description:{
        type:String ,
        reqiured:true
    }
    
   
},{
    timestamps:true
})
// create collection

const AboutModel=mongoose.model('about',AboutSchema)
module.exports=AboutModel