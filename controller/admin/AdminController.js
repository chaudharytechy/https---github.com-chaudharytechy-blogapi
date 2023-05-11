class AdminController{
    static dashboard=(req,res)=>{
       try {

    const{name,email}=req.admin

        // res.render('admin/dashboard',{n:name,e:email})
        res.status(200).json({
            success: true,
        
        })
       } catch (error) {
        console.log(error)
       }
    }
}
module.exports=AdminController;