import { Router } from "express";
import { authToken } from "../middleware/authMiddleware";
import authRoute from "./AuthRoute";
import playerRoute from "./PlayerRoute";
import gameRoute from "./GameRoute";

const apiVersionRouting = Router()

apiVersionRouting.use('/auth', authRoute)
apiVersionRouting.use('/player', authToken, playerRoute)
apiVersionRouting.use('/game', authToken, gameRoute)

export default apiVersionRouting