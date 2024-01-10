import jwt from 'jsonwebtoken'
import userModel from '../models/User.js'

var checkUserAuth = async (req,res,next) =>{
    let token 
    const {authorization} = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try{
            token = authorization.split(' ')[1]

            // verify token
            const {userID} = jwt.verify(token, process.env.JWT_SECRET_KEY)

            // Get user from token
            req.user = await userModel.findById(userID).select('-password')
            next()
        }catch(error){
            console.log(error)
            res.status(401).send({"status":"failed", "message": "Unauthorized User"})
        }
    }
    else{
        res.status(401).send({"status":"failed", "message": "Unauthorized User, no token"})
    }
}

export default checkUserAuth;