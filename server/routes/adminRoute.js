const Admin = require('../models/Admin');
const express = require('express');
//console.log(express)
const router = express.Router();

router.get('/', async(req,res)=>{
    return res.json("Api Called")

})

router.post('/admin', async(req,res)=>{
    const reg = await new Admin(req.body)
    reg.save();
    return res.json(" Admin Registered successfully");
})

router.post('/login', async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body)
    const admin = await Admin.findOne({email:email});
    
    if(!admin){
        return res.status(400).json('Admin not found')
    }
    if(admin.password == password){
        return res.status(200).json
        ({message:"Login Successfully", admin:{
            email:admin.email,
            id:admin._id,
            role:"admin"
        }})
    } else {
        return res.json({message:"Password does not matched"})
    }
})
router.put('/change/:id',async(req,res)=>{
    const {oldpassword, newPassword, ConfirmPassword} = req.body;
    const{id} = req.params;
    const user = await Admin.findById(req.params.id);
    if(!user){
        return res.json({message:"Details are not matches"})
    }
    if(user.password==oldPassword){
        return res.json({message:"Your old and new password are same"})
    }
    else if(newPassword==ConfirmPassword){
         try{
            const ex = await Admin.findByIdAndUpdate(id,{password:ConfirmPassword});
            return res.json({message:"Password updated successfully"});
         }catch(er){
            console.log(er)
            return res.json({message:"Sorry, Try again!"})
         }
    }
    else{
        return res.json({message:"Your old password not matched"})

    }
})

module.exports = router

