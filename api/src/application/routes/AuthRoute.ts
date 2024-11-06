import { Router } from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controllers/AuthController";
import { authToken } from "../middleware/authMiddleware";

const authRoute = Router();

authRoute.post('/login', getUser);
authRoute.post('/register', createUser);
authRoute.put('/update', authToken, updateUser);
authRoute.delete('/delete', authToken, deleteUser);

export default authRoute;