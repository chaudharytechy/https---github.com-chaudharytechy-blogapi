const { findById } = require('../../models/Blog')
const BlogModel = require('../../models/Blog')


var cloudinary = require('cloudinary').v2;




class BlogController {
  static blogdisplay = async (req, res) => {

    const data = await BlogModel.find().sort({_id:-1}).limit(6)
    // console.log(data)
  

    res.render('admin/blog/blogdisplay', { d: data })
  }

  static bloginsert = async (req, res) => {
    
    // 
    // )
    try {
      const file=req.files.image
    // console.log(file)
    const myimage=await cloudinary.uploader.upload(
        file.tempFilePath,{folder:'blog_pic'})
      const result = new BlogModel({
        title: req.body.title,
        description: req.body.description,
        image: {
          public_id: myimage.public_id,
          url: myimage.secure_url,

      },
      })
      await result.save()
    
      res.redirect('admin/blogdisplay')
    // console.log(myimage)
    } catch (err) {
      console.log(err)
    }
  }
  static blogview = async (req, res) => {
    // console.log(req.params.id)
    try{
      const results=await BlogModel.findById(req.params.id)
    // console.log(results)
    res.render('admin/blog/blogview',{b:results})

    }catch(err){
      console.log(err)
    }
  }
  static blogedit=async (req,res)=>{
    // console.log(req.params.id)
    try{
      const results=await BlogModel.findById(req.params.id)
    // console.log(results)
    res.render('admin/blog/blogedit',{b:results})

    }catch(err){
      console.log(err)
    }
  }

  static blogupdate=async(req,res)=>{
    try{
      const user=await BlogModel.findById(req.params.id)
      const imageId=user.image.public_id
      await cloudinary.uploader.destroy(imageId)
      const file=req.files.image
      // console.log(file)
      const myimage=await cloudinary.uploader.upload(
          file.tempFilePath,{folder:'blog_pic'})
      // console.log(imageId)
     
        //  console.log(req.params.id)
        //  console.log(req.body)
        const results=await BlogModel.findByIdAndUpdate(req.params.id,{
          title:req.body.title,
          description:req.body.description,
          image: {
            public_id: myimage.public_id,
            url: myimage.secure_url,
  
        },

        })

        await results.save()
        res.redirect('/admin/blogdisplay')// redirect contain route fromm app.js
    }catch(err){
      console.log(err)
    }
  }
 
static blogdelete=async(req,res)=>{
  try{
    const user=await BlogModel.findById(req.params.id)
    // console.log(user)
    const imageId=user.image.public_id
    await cloudinary.uploader.destroy(imageId)

  const results=await BlogModel.findByIdAndDelete(req.params.id)
  res.redirect('/admin/blogdisplay');

  }catch(err){
    console.log(err)
  }
}


}

module.exports = BlogController