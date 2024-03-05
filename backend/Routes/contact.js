import express from 'express';
import {
    createContactMessage,
    getallContact
} from '../../controllers/contactController.js';

// import {isAdmin} from "../middleware/middleware.js"

const router = express.Router();

// import {isAdmin,protect} from '../../middleware/authMiddlesware.js';


router.post("/new", createContactMessage);
router.get('/',getallContact);
export default router;