import express, { Router } from 'express';
import login from '../controllers/auth/login';
import validateCredentials from '../middlewares/credentials';
const router: Router = express.Router();

router.post('/login', [validateCredentials, login]);

export default router;