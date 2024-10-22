import { Router } from "express";
import { attack, startGame } from "../controllers/GameController";

const gameRoute = Router()

gameRoute.post('/start', startGame)
gameRoute.post('/attack', attack)

module.exports = gameRoute;