const AboutModel=require('../../models/about')

class AboutController{
    static about=async(req,res)=>{

        const data = await AboutModel.find()
        // console.log(data)
        // res.render('admin/about', { d: data })
        res.status(200).json({
            success: true,
          data
        })
       
    }

    static aboutedit=async(req,res)=>{
        try {
            const result=await AboutModel.findById(req.params.id)
            // console.log(result)
            // res.render('admin/aboutedit',{b:result})
            res.status(200).json({
                success: true,
              result
            })
        } catch (error) {
            console.log(error)
        }
    }

    // update method
    static aboutupdate=async(req,res)=>{

        try {
            const result=await AboutModel.findByIdAndUpdate(req.params.id,{
                description:req.body.description,
            })
            await result.save()
            // res.redirect('/admin/about')
            res.status(200).json({
                success: true,
              result
            })
        // console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}
module.exports=AboutController