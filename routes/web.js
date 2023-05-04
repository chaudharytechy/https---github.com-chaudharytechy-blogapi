const express=require('express')
const router=express.Router()


const AboutController = require('../controller/admin/AboutController')
const AdminController = require('../controller/admin/AdminController')
const BlogController = require('../controller/admin/BlogController')
const CategoryController = require('../controller/admin/CategoryController')
const ContactController = require('../controller/admin/ContactController')
const FrontController = require('../controller/FrontController')
const admin_auth=require('../middleware/auth')

// routing front
router.get('/',FrontController.home);
router.get('/about',FrontController.about);
router.get('/contact',FrontController.contact);
router.get('/blog',FrontController.blog)
router.get('/login',FrontController.login)
router.get('/blogdetail/:id',FrontController.blogdetail)
router.get('/register',FrontController.adminregister)
router.post('/admininsert',FrontController.admininsert)
router.post('/verify_login',FrontController.verifylogin)
router.get('/logout',FrontController.logout)


// admin route
router.get('/admin/dashboard',admin_auth,AdminController.dashboard)


// admin blog reute
router.get ('/admin/blogdisplay',admin_auth,BlogController.blogdisplay)
router.post('/bloginsert',admin_auth,BlogController.bloginsert)

router.get('/admin/blogview/:id',admin_auth,BlogController.blogview)
router.get('/admin/blogedit/:id',admin_auth,BlogController.blogedit)
router.post('/blogupdate/:id',admin_auth,BlogController.blogupdate)

router.get('/admin/blogdelete/:id',admin_auth,BlogController.blogdelete)

// about routing
router.get('/admin/about',admin_auth,AboutController.about)
router.get('/admin/aboutedit/:id',admin_auth,AboutController.aboutedit)
router.post('/aboutupdate/:id',admin_auth,AboutController.aboutupdate)

// category routing
router.get('/admin/category',admin_auth,CategoryController.category)
router.post('/categoryinsert',CategoryController.categoryinsert)
router.get('/admin/categoryview/:id',CategoryController.categoryview)
router.get('/admin/categoryedit/:id',CategoryController.categoryedit)
router.post('/categoryupdate/:id',CategoryController.categoryupdate)
router.get('/admin/categorydelete/:id',CategoryController.categorydelete)

//  contact routing
router.get('/admin/contact',admin_auth,ContactController.contact)
router.post('/contactinsert',ContactController.contactinsert)



module.exports=router