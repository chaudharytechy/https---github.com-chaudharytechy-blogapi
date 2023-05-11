const CategoryModel = require('../../models/category')

class CategoryController {

    static category = async (req, res) => {

        const data = await CategoryModel.find()
        // console.log(data)
        // res.render('admin/category', { d: data })
        res.status(200).json({
            success: true,
          data
        })
    }

    // insert method
    static categoryinsert = async (req, res) => {
        // console.log("hello")
        // console.log(req.body)
        try {
            const results = new CategoryModel({
                title: req.body.title,
                category: req.body.category
            })
            await results.save()
            // res.redirect('/admin/category')
            res.status(200).json({
                success: true,
              results
            })

        } catch (err) {
            console.log(err)
        }
    }
    // view method
    static categoryview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const results = await CategoryModel.findById(req.params.id)
            // res.render('admin/categoryview', { b: results })
            res.status(200).json({
                success: true,
                 results
            })

        } catch (error) {
            console.log(error)
        }
    }

    // edit method
    static categoryedit = async (req, res) => {
        // console.log(req.params.id)
        try {
            const results = await CategoryModel.findById(req.params.id)
            // res.render('admin/categoryedit', { b: results })
            res.status(200).json({
                success: true,
              results
            })
        } catch (error) {
            console.log(error)
        }
    }

    // update method
    static categoryupdate = async (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
       try {
        const results = await CategoryModel.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            category: req.body.category
        })
        await results.save()
        // res.redirect('/admin/category')
        res.status(200).json({
            success: true,
          results
        })

       } catch (error) {
        console.log(error)
       }
    }

    // delete method
    static categorydelete=async(req,res)=>{
        try {
            const results=await CategoryModel.findByIdAndDelete(req.params.id)
        // res.redirect('/admin/category')
        res.status(200).json({
            success: true,
            message:'delete successfully'
        })
            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = CategoryController