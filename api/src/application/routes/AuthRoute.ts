import { Router } from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controllers/AuthController";

const router = Router();

router.get('/auth', getUser);
router.post('/auth', createUser);
// router.put('/auth', updateUser);
// router.delete('/auth', deleteUser);

module.exports = router;