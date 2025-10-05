import { Router } from 'express';
import { newRegister, loginUser } from '../controller/auth.controller';

const authRouter = Router();

authRouter.post('/register', newRegister);
authRouter.post('/login', loginUser);

export default authRouter;