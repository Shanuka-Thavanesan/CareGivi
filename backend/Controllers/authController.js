import User from '../models/UserSchema.js';
import Caretaker from '../models/caretakerSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const generateToken = (user) => {
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
      expiresIn: '30d',
    });
  
    return token;
  };



export const register =async(req,res)=>{

    const{email,password,name,role,photo,gender}= req.body

    
    try {
        let user;

        if(role === 'careneeder'){
            user = await User.findOne({email})
        }
        else if(role === 'caretaker'){
            user= await Caretaker.findOne({email})
        }

        // check if user exist
        if(user){
            return res.status(400).json({message:"User already exist"})
        }

        // hash password
        const salt=await bcrypt.genSalt(10)
        const hashPassword=await bcrypt.hash(password,salt)

        if(role === 'careneeder'){
            user = new User ({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }
        if(role === 'caretaker'){
            user = new Caretaker ({
                name,
                email,
                password:hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()

        res.status(200).json({success:true,message:'User successfuly created'})
        
    } catch (err) {
        res.status(500).json({success:false,message:'Internal server error, Try agin'})
    }
};

export const login =async(req,res)=>{

    const {email}=req.body

    try {

        let user=null

        const careneeder=await User.findOne({email})
        const caretaker=await Caretaker.findOne({email})

        if(careneeder){
            user=careneeder
        }
        if(caretaker){
            user= caretaker
        }
        
    // check if user exist or not
        if(!user){
            return res.status(404).json({message:"User not found"})  
        }

        // compare password
        const isPassswordMatch=await bcrypt.compare(
            req.body.password, 
            user.password
            );
        if(!isPassswordMatch){
            return res
            .status(400)
            .json({status:false,message:"Invalid credentials"})   
        }

        // get token
        const token = generateToken(user);

        // add cookie to browser
        res.cookie('token', token, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
          sameSite: 'None',
          secure: true, // secure cookie only in production
        });
    
        const { password, role, appoinment, ...rest } = user._doc;
        res.status(200).json({
          status: true,
          message: 'Succesfully login',
          token,
          data: { ...rest },
          role,
        });
      } catch (err) {
        res.status(500).json({ status: false, message: 'Failed to login' });
      }
    };


export default generateToken;