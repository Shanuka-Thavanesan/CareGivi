
import express from "express";
import { 
    createTaker,
    getAllTaker,
    getSingleTaker,
    updateTaker,
    deleteTaker
   
} from "../Controllers/takerFormController.js";

import { authenticate } from "../auth/verifyToken.js";

const router=express.Router();

router.post('/createtaker',authenticate,createTaker);
router.get('/getalltakers',authenticate,getAllTaker);
router.get('/get/:id',authenticate,getSingleTaker);
router.put('/updatetaker/update/:id',authenticate,updateTaker);
router.delete('/detetaker',authenticate,deleteTaker);
export default router;