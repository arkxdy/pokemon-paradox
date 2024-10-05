import { Router } from "express";
import { getUser, createUser, updateUser } from "../controllers/AuthController";

const router = Router();

router.get('/', getUser);
router.post('/', createUser);
router.put('/', updateUser);

module.exports = router;