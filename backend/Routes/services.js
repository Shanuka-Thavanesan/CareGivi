import express from "express";
import {
    service,
    getservices,
    getserviceId,
    deleteserviesId,
    UpdateService
} from "../Controllers/serviceController.js";
// import {isAdmin} from "../middleware/middleware.js"

const router= express.Router();

router.post('/services',service);
router.get('/services/get',getservices);
router.get('/services/:id',getserviceId);
router.delete('/services/delete:id',deleteserviesId);
router.put('/services/update/:id',UpdateService);

export default router;