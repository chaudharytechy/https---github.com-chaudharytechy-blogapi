const CategoryModel = require('../../models/category')

class CategoryController {

    static category = async (req, res) => {

        const data = await CategoryModel.find()
        // console.log(data)
        res.render('admin/category', { d: data })
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
            res.redirect('/admin/category')

        } catch (err) {
            console.log(err)
        }
    }
    // view method
    static categoryview = async (req, res) => {
        // console.log(req.params.id)
        try {
            const results = await CategoryModel.findById(req.params.id)
            res.render('admin/categoryview', { b: results })

        } catch (error) {
            console.log(error)
        }
    }

    // edit method
    static categoryedit = async (req, res) => {
        // console.log(req.params.id)
        try {
            const results = await CategoryModel.findById(req.params.id)
            res.render('admin/categoryedit', { b: results })
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
        res.redirect('/admin/category')

       } catch (error) {
        console.log(error)
       }
    }

    // delete method
    static categorydelete=async(req,res)=>{
        try {
            const results=await CategoryModel.findByIdAndDelete(req.params.id)
        res.redirect('/admin/category')
            
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports = CategoryController