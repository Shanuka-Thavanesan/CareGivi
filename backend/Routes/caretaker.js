
import express from "express";
import { updateCaretaker,
        deleteCaretaker,
        getAllCaretaker,
        getSingleCaretaker,
        getCaretakerProfile,
        takerProfile
     } from "../Controllers/caretakerController.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

import reviewRouter from './review.js';
// import {isAdmin} from "../middleware/middleware.js"

const router=express.Router();

// nested route
router.use('/:caretakerId/reviews', reviewRouter)

router.get('/:id',authenticate,getSingleCaretaker);
router.get('/',getAllCaretaker);
router.put('/:id',authenticate,restrict(['caretaker']),updateCaretaker);
router.delete('/:id',authenticate,restrict(['caretaker']),deleteCaretaker);

router.get('/profile/me',authenticate,restrict(['caretaker']),getCaretakerProfile);
router.get('/gettaker/profile',authenticate,takerProfile);

export default router;