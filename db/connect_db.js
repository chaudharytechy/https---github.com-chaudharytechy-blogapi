const mongoose=require('mongoose')

const connectDB=()=>{
    return mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log('connection successfully')
    })
    .catch((err)=>{
        console.log(err)
    })
}
module.exports=connectDB