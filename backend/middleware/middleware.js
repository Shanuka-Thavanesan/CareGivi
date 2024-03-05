import asyncHandler from "express-async-handler";
import  User from '../models/UserSchema.js';
import jwt  from "jsonwebtoken"

 const protect = asyncHandler(async(req,res,next)=>{
 let token;
//  token =req.cookies.token;
 if(token){
    try{
           const decoded = jwt.verify(token,process.env.JWT_SECRET);
           req.user= await User.findById(decoded.userId).select('-password');
           next();
    } catch (error){
        res.status(401);
        throw new Error("Not authorized,invaild token");
    }
} else{
    res.status(401);
    throw new Error("Not authorized,no token");
}
 });
// const isAdmin = asyncHandler(async (req, res, next) => {
//     const { email } = req.user;
//     const adminUser = await User.findOne({ email });
//     if(adminUser.role !== "admin"){
//       throw new Error ("You are not an admin");
//     } else {
//       next();
//     }
//   });

  export  {protect};