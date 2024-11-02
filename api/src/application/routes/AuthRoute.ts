import { Router } from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controllers/AuthController";
import { authToken } from "../middleware/authMiddleware";

const router = Router();

router.post('/login', getUser);
router.post('/register', createUser);
// router.put('/auth', updateUser);
// router.delete('/auth', deleteUser);
const protectedRoutes = Router();
router.put('/update', authToken, updateUser);
router.delete('/delete', authToken, deleteUser);

module.exports = router, protectedRoutes;