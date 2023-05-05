const mongoose=require('mongoose')

const connectDB=()=>{
    return mongoose.connect("mongodb+srv://amit8601396382:Amit123@cluster0.o6b8rav.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log('connection successfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB