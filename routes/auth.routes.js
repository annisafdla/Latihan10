import express from 'express';
import * as authController from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/', authController.login);
router.get('/', authController.login);

export default router;
