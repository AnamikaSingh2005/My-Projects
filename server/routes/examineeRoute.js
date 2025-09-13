const Examinee = require('../models/Examinee')
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { email } = req.body;

    
    const ex = await Examinee.findOne({ email });
    if (ex) {
      return res.status(400).json({ error: "Details already exist" });
    }

    
    const user = new Examinee(req.body);
    await user.save();

    return res.status(201).json({ message: "Registered Successfully", user });
  } catch (error) {
    console.error("Error in registration:", error.message);
    return res.status(500).json({ error: "Server error" });
  }
});

router.get('/', async(req,res)=>{
    const user = await Examinee.find();
    return res.json(user)
})
router.put('/:id', async(req,res)=>{
    const{id} = req.params;
    const user = await Examinee.findByIdAndUpdate(id,req.body);
    return res.json("Updated Successfully")
})
router.delete('/:id', async(req,res)=>{
    const {id} = req.params;
    const user = await Examinee.findByIdAndDelete(id);
    return res.json("Deleted Successfully")
})
router.get('/:id', async(req,res)=>{
    const {id} = req.params
    const user = await Examinee.findById(id)
    return res.json(user)
})

router.post('/login', async(req,res)=>{
    const {email, password} = req.body;
    const user = await Examinee.findOne({email:email});
    if(!user){
        return res.status(400).json("user not found")
    }
    if(user.password == password){
        return res.status(200).json({message:"Login Successfully", user:{
            email:user.email,
            id:user._id,
            role:"user"
        }})
    }else{
        return res.json({message:"Password not matched"})
    }
})

router.put('/change/:id',async(req,res)=>{
    const {oldpassword, newPassword, ConfirmPassword} = req.body;
    const{id} = req.params;
    const user = await Examinee.findById(req.params.id);
    if(!user){
        return res.json({message:"Details are not matches"})
    }
    if(user.password==oldPassword){
        return res.json({message:"Your old and new password are same"})
    }
    else if(newPassword==ConfirmPassword){
         try{
            const ex = await Examinee.findByIdAndUpdate(id,{password:ConfirmPassword});
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