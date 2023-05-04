const ContactModel=require('../../models/contact')

class ContactController{
    static contact=async(req,res)=>{
        const result=await ContactModel.find()
        // console.log(result)
        res.render('admin/contact',{d:result})
    }


    // contact submit method
    static contactinsert=async(req,res)=>{
        try {
            // console.log("hello")

            const results = new ContactModel({
                name: req.body.name,
                email: req.body.email,
                phone:req.body.phone,
                message:req.body.message
            })
            await results.save()
            res.redirect('/admin/contact')
        } catch (error) {
           console.log(error) 
        }

    }
    
}
module.exports=ContactController