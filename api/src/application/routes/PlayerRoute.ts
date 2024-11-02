import { Router } from "express";
import { createPlayer, getPlayer, updatePlayer } from "../controllers/PlayerController";
import { updateUser } from "../controllers/AuthController";

const playerRoute = Router();

playerRoute.get('/get', getPlayer)
playerRoute.post('/create', createPlayer)
playerRoute.put('/update', updatePlayer)

module.exports = playerRoute;