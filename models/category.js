const mongoose=require('mongoose')

// define schema
const CategorySchema=new mongoose.Schema({
    title:{
        type:String ,
        reqiured:true
    },
    category:{
        type:String ,
        reqiured:true
    }
   
},{
    timestamps:true
})
// create collection

const CategoryModel=mongoose.model('category',CategorySchema)
module.exports=CategoryModel