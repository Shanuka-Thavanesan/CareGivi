
import express from "express";
import { updateUser,
    deleteUser,
    getAllUser,
    getSingleUser ,
    getUserProfile,
    getMyAppointment,
    // getuserID

} from "../Controllers/userController.js";
// import {isAdmin,protect} from "../middleware/middleware.js"



import { authenticate, restrict } from "../auth/verifyToken.js";

const router=express.Router();

router.get('/:id',authenticate,restrict(['careneeder']), getSingleUser);

router.get('/',getAllUser);

router.put('/:id',authenticate,restrict(['careneeder']),updateUser);
router.delete('/:id',authenticate,restrict(['careneeder']),deleteUser);
router.get('/profile/me',authenticate,restrict(['careneeder']),getUserProfile);
router.get('appinments/my-appoinments',authenticate,restrict(['careneeder']),getMyAppointment);

export default router;