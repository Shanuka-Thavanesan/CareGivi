import jwt from 'jsonwebtoken';
import Caretaker from '../models/caretakerSchema.js';
import User from '../models/UserSchema.js';


export const authenticate = async (req, res, next) => {
    // Get the authorization  token from request headers
    const authToken = req.headers.authorization;
    // Check if token exists or if it doesn't start with the string 'Bearer' it returns the 401+ error message
    if (!authToken || !authToken.startsWith('Bearer')) {
        return res.status(401).json({ success: false, message: 'No token, authorization denied' });
    }
    try {

        // extracts the token from the authorization header
        // split the header string by space
        // retrieves the token from the second part.
        // 0= Bearer 1= token
        const token = authToken.split(" ")[1];
        
        // Verify token
        // decodes and verifies the token's authenticity using the provided secret key 
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        // If the token is successfully verified
        // Attach decoded user ID and role to request object
        // This allows subsequent middleware or route handlers to access the user ID and role.
        req.userId = decoded.id;
        req.role = decoded.role;
        // pass control to the next middleware in the stack
        next();
    } catch (err) {
        if (err instanceof jwt.TokenExpiredError) {
            return res.status(401).json({ success: false, message: 'Token is expired' });
        }
        // If the error is not a TokenExpiredError
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

export const restrict = roles => async (req, res, next) => {
    // retrieves the userId from the request object (req).
    // assumes that the authenticate middleware has already run and attached the userId to the request object.
    const userId = req.userId

    //  store the user retrieved from the database.
    let user;

    // asynchronously query the database to find a user with the given userId
    const careneeder = await User.findById(userId);
    // asynchronously query the database to find a caretaker with the given userId
    const caretaker = await Caretaker.findById(userId);

    if (careneeder) {
        user = careneeder;
    }
    if (caretaker) {
        user = caretaker;
    }

    // If the user's role is not included in the specified roles
    if (!roles.includes(user.role)) {
        return res
            .status(401)
            .json({ success: false, message: 'you are not authorized' })
    }

    // next function to pass control to the next middleware in the stack
    next();
};
