const express = require('express')
const { connect } = require('mongoose')
var cloudinary = require('cloudinary').v2;

const connectDB=require('./db/connect_db')
// env
require('dotenv').config()
// const bodyParser=require('body-parser')
const fileUpload=require('express-fileupload')

var session = require('express-session')
var flash = require('connect-flash');

const router=require('./routes/web')


const app = express()
const port = process.env.PORT
// const cloud=process.env.CLOUDINARY_API_SECRET
// console.log(cloud)

// cookie
const cookieParser=require('cookie-parser')
app.use(cookieParser())




// connect_db call mongoDb
connectDB()


cloudinary.config({
  cloud_name:process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret:process.env.CLOUDINARY_API_SECRET
  // secure: true
});
// body parser
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.urlencoded({ extended: false }))

// app.get("/",FrontController.home
// )
//  file uploader
app.use(fileUpload({useTempFiles: true}));

// setup ejs 
app.set('view engine','ejs')


// console.log(process.env.CLOUDINARY_NAME)
// message display
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
    
  }));
  
  app.use(flash());


//   router link 
app.use('/',router)


// public file use
app.use(express.static('public'))






// server
app.listen(port,()=>{
    console.log(`example ${port}`)
})