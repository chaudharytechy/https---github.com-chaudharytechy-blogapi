const mongoose=require('mongoose')

// define schema
const blogSchema=new mongoose.Schema({
    title:{
        type:String ,
        reqiured:true,
    },
    description:{
        type:String,
        reqiured:true
    },
    image:{   
    
      public_id: {
        type: String,
        
      },
      url: {
        type: String,
         
      },
    },
},{
    timestamps:true
})
// create collection

const BlogModel=mongoose.model('blog',blogSchema)
module.exports=BlogModel