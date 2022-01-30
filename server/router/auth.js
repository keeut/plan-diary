import express from "express";
import 'express-async-errors';
import {signup,login, me} from '../controller/auth.js';

const router = express.Router();

router.post('/signup',signup)
router.post('/login',login)
router.get('/me',me)
export default router;