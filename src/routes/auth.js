import express from 'express';
import { signUp, signIn } from "../controllers/auth"
const routerAuth = express.Router();

routerAuth.post("/signup", signUp)
routerAuth.post("/signin", signIn)

export default routerAuth