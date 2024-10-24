import { Router } from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controllers/AuthController";
import { authToken } from "../middleware/authMiddleware";

const router = Router();

router.get('/auth', getUser);
router.post('/auth', createUser);
// router.put('/auth', updateUser);
// router.delete('/auth', deleteUser);
const protectedRoutes = Router();
router.put('/auth', authToken, updateUser);
router.delete('/auth', authToken, deleteUser);

module.exports = router, protectedRoutes;