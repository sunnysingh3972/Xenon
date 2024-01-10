import userModel from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import messageModel from "../models/Contact.js";

class userController{
    static userRegistration = async(req, res)=>{
        try {
            const {name, email, password, cpassword} = req.body
            if(name && email && password && cpassword ){
                const user = await userModel.findOne({email:email});
                if(!user){
                    if(password === cpassword){
                        const salt = await bcrypt.genSalt(12);
                        const hashPassword = await bcrypt.hash(password, salt);
                        const doc = new userModel({
                            name: name,
                            email:email,
                            password:hashPassword,
                        })
                        await doc.save();
                        const saved_user = await userModel.findOne({email:email});
                        const token = jwt.sign({userID:saved_user._id},process.env.JWT_SECRET_KEY, {expiresIn: '5d'})
                        res.status(201).send({"status":"Success", "message":"user registered successfully", "token": token});
                    }
                    else{
                        res.send({"status":"failed", "message":"password should be same"})
                    }
                }else{
                    
                    res.send({"status":"failed", "message":"email already exists"})
                }
            }
            else{
                res.send({"status":"failed", "message":"All the field are required"})
            }
        } catch (error) {
            res.send({"status":"failed", "message":"failed to register"})
            console.log(error);
        }
    }

    static userLogin = async (req, res) =>{
        try{
            const {email, password} = req.body;
            if(email && password){
                const user = await userModel.findOne({email:email});
                if(user){
                    const isMatch = await bcrypt.compare(password, user.password)
                    if(isMatch){
                        const user = await userModel.findOne({email:email});
                        const token = jwt.sign({userID:user._id,name:user.name},process.env.JWT_SECRET_KEY, {expiresIn: '5d'})
                        res.json({status:"Succes", message:"Login successfull", "token": token})
                    }
                    else{
                        res.json({status:"failed", message:"email or password is not valid"})
                    }
                }
                else{
                    res.json({status:"failed", message:"email or password is not valid"})
                }
            }else{
                res.json({status:"failed", message:"All fields are required"})
            }
        }catch(error){
            res.json({status:"failed", message:"failed to login"})
        }

    }

    static changeUserPassword = async (req, res) =>{
        const {password, cpassword} = req.body
        if(password && cpassword){

            if(password!==cpassword){
                res.json({status:"failed", message:"New password and confirm new password doesn't match"})
            }else{
                const salt = await bcrypt.genSalt(12);
                const newHashPassword = await bcrypt.hash(password,salt);
                await userModel.findByIdAndUpdate(req.user._id, {$set:{
                    password: newHashPassword}})
                res.json({status:"Success", message:"password changed succesfully"})
            }
        }
        else{
            res.json({status:"failed", message:"All fields are required"})
        }
    }

    static loggedUser = async (req,res)=>{
        try{

            res.send({"user":req.user});
        }catch(error){
            console.log(error)
        }
    }
    static sendUserPasswordResetEmail = async(req,res)=>{
        const {email} = req.body
        if(email){
            const user = await userModel.findOne({email:email});
            if(user){
                const secret = user._id + process.env.JWT_SECRET_KEY
                const token = jwt.sign({userID: user._id},secret, {expiresIn: '15m'})
                const link = `http://127.0.0.1:3000/api/user/reset/${user._id}/${token}`
                console.log(link);
                res.json({status:"success", message:"Password reset email sent... Please check your Email"})

            }
            else{
                res.json({status:"failed", message:"Email doesn't exists"})
            }
        }else{
            res.json({status:"failed", message:"All fields are required"})
        }
    }

    static userPasswordReset = async(req,res) =>{
        const {password, cpassword} = req.body;
        const {id, token} = req.params
        const user = await userModel.findById(id);
        const new_secret = user._id + process.env.JWT_SECRET_KEY
        try {
            jwt.verify(token, new_secret);
            if(password && cpassword){
                if(password===cpassword){
                    const salt = await bcrypt.genSalt(12);
                    const newHashPassword = await bcrypt.hash(password,salt);
                    await userModel.findByIdAndUpdate(user._id, {$set:{
                        password: newHashPassword}})
                    res.json({status:"Success", message:"password reset succesfully"})
                }else{
                    res.json({status:"failed", message:"New password and confirm new password doesn't match"})
                }
            }else {
                res.json({status:"failed", message:"All fields are required"})
            }
        } catch (error) {
            console.log(error);

        }

    }
    static userMessage = async(req, res)=>{
        try {
            const {name, subject, message} = req.body
            if(name && subject && message ){
                const doc = new messageModel({
                    name: name,
                    subject:subject,
                    message:message,
                })
                await doc.save();
                res.status(201).send({"status":"Success", "message":"Message send successfully"});
                
            }
            else{
                res.send({"status":"failed", "message":"All the field are required"})
            }
        } catch (error) {
            res.send({"status":"failed", "message":"failed to send message"})
            console.log(error);
        }
    }
}
export default userController;