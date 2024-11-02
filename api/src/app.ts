import { Application, Request, Response } from "express"
import { compression, cookieParser, cors, express } from "./core/modules";
import { authToken } from "./application/middleware/authMiddleware";
import { CustomRequest } from "./core/types";

const authRoute = require('./application/routes/AuthRoute');
const playerRoute = require('./application/routes/PlayerRoute');
const gameRoute = require('./application/routes/GameRoute');
const errorHandler = require('./application/middleware/errorHandler')
const app: Application = express();
app.use(
    cors({
        origin: true,
        credentials: true
    })
)

app.get('/', (_req: Request, res: Response): Response => {
    return res.status(200).json("Server is running")
})
app.use('/api/v1')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(compression())
//add routes
app.use('/auth', authRoute);
app.use('/auth', authToken);
app.use('/player', playerRoute)
app.use('/game', gameRoute)
app.get('/d', (req:CustomRequest, res: Response): Response => {
    console.log(req.username); 
    return res.status(200).json("Success")
})
app.use(errorHandler.notFound)
module.exports = app;