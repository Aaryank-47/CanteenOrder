import express from 'express';
import {adminSignup, adminLogin, adminLogout} from '../Controllers/authAdminControl.js';

const router = express.Router();

router.route('/signup').post(adminSignup);
router.route('/login').post(adminLogin);
router.route('/logout').post(adminLogout);

export default router;