import jwt from 'jsonwebtoken';
import Caretaker from '../models/caretakerSchema.js';
import User from '../models/UserSchema.js';

// export const authenticate = async (req, res, next) => {

//     // get token from headers
//     const authToken = req.headers.authorization
    
//     // check token is exists
//     if (!authToken || !authToken.startsWith('Bearer')) {
//         return res.status(401).json({ success: false, message: 'No token, authorization denied' })
//     }

//     try {
//         const token = authToken.split(" ")[1];
        
//         // verify token
//         const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

//         req.userId = decoded.id
//         req.role = decoded.role
       
//         next()
//     } catch (err) {
//         if (err.name === 'TokenExpiredError') {
//             return res.status(401).json({ message: 'Token is expired' })
//         }

//         return res.status(401).json({ successs: false, message: 'Invalid token' })
//     }
// }

export const authenticate = async (req, res, next) => {
    // Get token from headers
    const authToken = req.headers.authorization;
    // Check if token exists
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }
    try {
        const token = authToken.split(" ")[1];
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        // Attach decoded user ID and role to request object
        req.userId = decoded.id;
        req.role = decoded.role;
        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ success: false, message: 'Token is expired' });
        }
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export const restrict = roles => async (req, res, next) => {
    const userId = req.userId

    let user;

    const careneeder = await User.findById(userId);
    const caretaker = await Caretaker.findById(userId);

    if (careneeder) {
        user = careneeder;
    }
    if (caretaker) {
        user = caretaker;
    }

    if (!roles.includes(user.role)) {
        return res
            .status(401)
            .json({ success: false, message: 'you are not authorized' })
    }

    next();
};
