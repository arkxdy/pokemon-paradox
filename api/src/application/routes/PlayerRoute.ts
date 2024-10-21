import { Router } from "express";
import { createPlayer, getPlayer, updatePlayer } from "../controllers/PlayerController";
import { updateUser } from "../controllers/AuthController";

const playerRoute = Router();

playerRoute.get('/player', getPlayer)
playerRoute.post('/player', createPlayer)
playerRoute.put('/player', updatePlayer)

module.exports = playerRoute;