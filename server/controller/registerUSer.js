const UserModel=require("../models/userModel")
const bcryptjs=require('bcryptjs')

async function registerUSer(req,res){
    try{

        const { name ,email,password,profile_pic}=req.body
        const checkEmail=await UserModel.findOne({email})
        if(checkEmail){
            return res.status(400).json({
                message:"Already user exists",
                error:true,
            })
        }

        //password into hashPassword
        const salt=await bcryptjs.genSalt(10)
        const hashPassword=await bcryptjs.hash(password,salt)
        const payload={
            name,
            email,
            profile_pic,
            password:hashPassword
        }
        const user=new UserModel(payload)
        const userSave=await user.save()

        return res.status(201).json({
            message:"User created successfully ",
            data:userSave,
            success:true
        })
    }
    catch(error)
    {
        return res.status(500).json({
            message:error.message || error,
            error:true
        })
    }
}
module.exports=registerUSer