import {getProfile} from '../Controllers/profileControl.js';
import express from 'express';

const router = express.Router();

router.route('/:userId').get(getProfile);

export default router;