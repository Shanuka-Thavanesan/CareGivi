
import express, { Router } from 'express';
import { register,login  } from '../Controllers/authController.js';

const router=express.Router()

router.post('/register',register)
router.post('/login/auth',login)

export default router;