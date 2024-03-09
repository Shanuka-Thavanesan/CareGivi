
import express from "express";
import { 
    createNeeder,  
    getSingleNeeder,
    getAllNeeder,
    updateNeeder, 
    deleteNeeder, 
    getNeederForm,
    
} from "../Controllers/neederController.js";
// import {isAdmin,protect} from "../middleware/middleware.js"
import { authenticate } from "../auth/verifyToken.js";



const router=express.Router();


router.post('/createneeder',authenticate,createNeeder);
router.get('/:id',authenticate,getSingleNeeder);
router.get('/getallneeders',authenticate,getAllNeeder);
router.put('/updateneeder/:id',authenticate,updateNeeder);
router.delete('/deleteneeder',authenticate,deleteNeeder);

router.get('/getpayment/profile',authenticate,getNeederForm);

export default router;