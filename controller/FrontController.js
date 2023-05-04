const BlogModel = require('../models/Blog')
const CategoryModel = require('../models/category')
const AboutModel = require('../models/about')
const AdminModel = require('../models/admin')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

class FrontController {

    static home = async (req, res) => {
        const data = await BlogModel.find()
        // console.log(data)

        // res.send("hello world")
        res.render('home', { d: data })
    }
    static about = async (req, res) => {
        const data = await AboutModel.find()
        // console.log(data)
        // res.send("hello about")
        res.render('about', { b: data })
    }
    static contact = (req, res) => {
        // res.send("hello team")
        res.render('contact')
    }
    static blog = async(req, res) => {
        // res.send("hello team")
        const result=await BlogModel.find()
        res.render('blog',{d:result})
    }

    static login = (req, res) => {
        res.render('login', { message: req.flash('success') })
    }
    static blogdetail = async (req, res) => {

        try {
            const category = await CategoryModel.find()

            const recentblog = await BlogModel.find()
            const result = await BlogModel.findById(req.params.id)
            //  console.log(result)
            res.render('blogdetail', { r: result, recentblog: recentblog, cat: category })
        } catch (error) {
            console.log(error)
        }

    }


    // admin login

    // static login=async(req,res)=>{
    //     res.render('login')
    // }
    static adminregister = async (req, res) => {

        res.render('register', { message: req.flash('error') })
    }
    static admininsert = async (req, res) => {
        try {
            // console.log("hello")
            // const result=await AdminModel.create(req.body)
            // res.redirect('/login')
            const { name, email, password, cpassword } = req.body
            const admin = await AdminModel.findOne({ email: email })
            // console.log(admin)
            if (admin) {
                req.flash('error', 'email already exists')
                res.redirect('/register')
            }
            else {
                if (name && email && password && cpassword) {
                    if (password == cpassword) {
                        try {
                           const hashpassword=await bcrypt.hash(password,10)

                            const result = new AdminModel({
                                name: name,
                                email: email,
                                password: hashpassword
                            })
                            await result.save()
                            req.flash('success', 'registration successfully please login ')
                            res.redirect('/login')
                        } catch (error) {
                            console.log(error)
                        }
                    }
                    else {
                        req.flash('error', 'password and confirnm pasword does not match')
                        res.redirect('/register')
                    }
                }
                else {
                    req.flash('error', 'all field  are required')
                    res.redirect('/register')
                }
            }


        } catch (error) {
            console.log(error)
        }
    }

static verifylogin=async(req,res)=>{
    try {
        const{email , password}=req.body
        if(email &&password){
           const admin=await AdminModel.findOne({email:email})
           if(admin !=null){
              const ismatched=await bcrypt.compare(password,admin.password)
              if((admin.email==email) && ismatched){
                // token genrate
                const token=jwt.sign({user_id:admin._id},process.env.JWT_SECRET_KEY)
                // console.log(token)
                res.cookie('token',token)
                  res.redirect('/admin/dashboard')
              }
              else{
                req.flash('error', 'email and password does not match')
                        res.redirect('/register')
              }
           }
           else{
            req.flash('error', 'You are not register')
                        res.redirect('/register')
           }
        }
        else{
            req.flash('error', 'password and confirnm pasword does not match')
            res.redirect('/login') 
        }
    } catch (error) {
     console.log(error)   
    }
}

static logout=async(req,res)=>{
    try {
          res.clearCookie('token')

        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
}

}
module.exports = FrontController;